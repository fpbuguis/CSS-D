<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hospital;
use App\Models\Department;
use App\Models\Doctor;
use App\Models\Specialty;
use App\Models\Onboard;
use App\Models\Patient;
use App\Models\Checkup;
use App\Models\CheckupSchedule;
use App\Models\LabsSubmitted;
use App\Models\SurveyResponse;

class DoctorController extends Controller
{
    //REGISTRATION
    /**
     * Fetch all hospitals.
     */
    public function getHospitals()
    {
        return Hospital::all();
    }

    /**
     * Fetch all departments.
     */
    public function getDepartments()
    {
        return Department::all();
    }

     /**
     * Fetch all specialties.
     */
    public function getSpecialties()
    {
        return Specialty::all();
    }

    /**
     * Fetch all doctors with associated user details.
     */
    public function getAllDoctors() {
        $doctors = Doctor::with('user')->get(); // Assuming you want user details as well
        return response()->json($doctors);
    }

    /**
     * Fetch all onboard records.
     */
    public function getOnboards() {
        return Onboard::all();
    }

    /**
     * Fetch a specific doctor by doctor ID with related address details.
     * 
     * @param int $doctorId
     */
    public function getDoctorById($doctorId) {
        $doctor = Doctor::where('doctor_id', $doctorId)
            ->with([
                'user',
                'user.address',
                'user.address.region',
                'user.address.province',
                'user.address.city',
                'user.address.municipality'
            ])
            ->first();

        return response()->json($doctor);
    }

    /**
     * Fetch all patients associated with a specific doctor.
     * 
     * @param int $doctorId
     */
    public function getPatientsByDoctor($doctorId)
    {
        $patients = Patient::whereHas('onboards', function ($query) use ($doctorId) {
            $query->where('doctor_id', $doctorId);
        })
        ->with(['user', 'checkups', 'checkupSchedules'])
        ->get();

        return response()->json($patients);
    }

    /**
     * Fetch all checkups associated with a specific doctor.
     * 
     * @param int $doctorId
     */
    public function getCheckupsByDoctor($doctorId)
    {
        $checkups = Checkup::where('doctor_id', $doctorId)
        ->with(['patient.user', 'checkupSchedules'])
        ->get();

        return response()->json($checkups);
    }

    /**
     * Fetch all checkup schedules associated with a specific doctor.
     * 
     * @param int $doctorId
     */
    public function getCheckupSchedulesByDoctor($doctorId)
    {
        $checkup_sched = CheckupSchedule::where('doctor_id', $doctorId)
        ->with(['patient.user'])
        ->get();

        return response()->json($checkup_sched);
    }

     /**
     * Fetch all submitted labs associated with a specific doctor.
     * 
     * @param int $doctorId
     */
    public function getLabsSubmittedByDoctor($doctorId)
    {
        $labs_submitted = LabsSubmitted::where('doctor_id', $doctorId)
        ->with(['patient.user','workup', ])
        ->get();

        return response()->json($labs_submitted);
    }

    /**
     * Fetch all survey responses associated with a specific doctor.
     * 
     * @param int $doctorId
     */
    public function getSurveyResponsesByDoctor($doctorId)
    {
        $survey_response = SurveyResponse::where('doctor_id', $doctorId)
        ->with(['patient.user','symptomSurvey.cancerType', 'symptomSurvey.category'])
        ->get();

        return response()->json($survey_response);
    }

     /**
     * Fetch a specific doctor by user ID with associated details.
     * 
     * @param int $userId
     */
    public function getDoctorByUserId($userId) {
        $doctor = Doctor::with(['user', 'hospital', 'department', 'specialty'])
        ->where('user_id', $userId)
        ->first();

        if (!$doctor) {
            return response()->json(['message' => 'Doctor not found'], 404);
        }

        $responseData = $doctor->toArray();

        // Customize response structure
        $responseData['user_details'] = $responseData['user'];
        $responseData['hospital_details'] = $responseData['hospital'];
        $responseData['department_details'] = $responseData['department'];
        $responseData['specialty_details'] = $responseData['specialty'];

        // Remove nested relations from the main level
        unset($responseData['user'], $responseData['hospital'], $responseData['department'], $responseData['specialty']);

        return response()->json($responseData);
    }

    /**
     * Fetch the latest onboard record for a specific patient.
     * 
     * @param int $patientId
     */
    public function getLatestOnboards($patientId)
    {
        $latestOnboard = Onboard::where('patient_id', $patientId)
            ->orderBy('onboard_id', 'desc')
            ->first();

        if (!$latestOnboard) {
            return response()->json([
                'message' => 'No onboard records found for the specified patient.',
            ], 404);
        }

        return response()->json($latestOnboard, 200);
    }
}
