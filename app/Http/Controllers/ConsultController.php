<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Consult;
use App\Models\Patient;
use App\Models\User;
use App\Models\Disease;

use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class ConsultController extends Controller
{
    /**
     * Create a new consult record.
     * 
     * @param \Illuminate\Http\Request $request
     * 
     */
    public function createConsult(Request $request)
    {
        /**
         * Fetch the patient by ID.
         */
        $patient = Patient::where('patient_id', $request['patient_id'])->first();

        if (!$patient) {
            return response()->json(['error' => 'Patient not found'], 404);
        }

        /**
         * Fetch the disease profile for the patient.
         */
        $diseaseByPatient = Disease::where('patient_id', $patient->patient_id)->first();

        if (!$diseaseByPatient) {
            return response()->json(['error' => 'Disease Profile not found'], 404);
        }

        $diseaseStatus_id = $diseaseByPatient->disease_status;

        /**
         * Validate the consult request data.
         */
        $validator = Validator::make($request->all(), [
            'subjective' => 'required',
            'objective' => 'required',
            'surveillance_workup' => 'required',
            'assessment' => 'required',
            'plan' => 'required',
            'patient_status' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

         /**
         * Create a new consult record.
         */
        $consult = Consult::create([
            'patient_id' => $patient->patient_id,
            'consult_subjective' => $request['subjective'],
            'consult_objective' => $request['objective'],
            'consult_surveillance_workup' => $request['surveillance_workup'],
            'consult_assessment' => $request['assessment'],
            'consult_plan' => $request['plan'],
            'consult_disease_status' => $diseaseStatus_id,
            'consult_patient_status' => $request['patient_status']
        ]);

        /**
         * Return a response with the created consult record.
         */
        return Inertia::render('ConsultPage', [
            'message' => 'Consult record created successfully',
            'consult' => $consult->consult_id
        ]);
    }
}
