<?php

namespace App\Http\Controllers;

use App\Models\LabsSubmitted;
use App\Models\Workup;
use App\Models\Doctor;

use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;


class LabSubmittedController extends Controller
{
    //submissions

    public function getLatestLabSubmittedByPatient($patientId)
    {
        $labs_submitted = LabsSubmitted::where('patient_id', $patientId)
            ->with(['patient.user', 'workup'])
            ->orderBy('labSubmitted_id', 'desc')
            ->first();

        return response()->json($labs_submitted);
    }

    public function getLabsSubmittedByPatient($patientId)
    {
        $labs_submitted = LabsSubmitted::where('patient_id', $patientId)
            ->with(['patient.user', 'workup'])
            ->get();

        return response()->json($labs_submitted);
    }

    public function getAllLabSubmissions(){
        return response()->json(LabsSubmitted::all());
    }

    public function getLabSubmissionByDoctor($userId){
        $doctor = Doctor::where('user_id', $userId)->first();
        return response()->json(LabsSubmitted::where('doctor_id', $doctor->doctor_id)->get());
    }


    public function getWorkupById($workupId){
        $workup = Workup::where('workup_id', $workupId)->first();
        return response()->json($workup);
    }

    public function submitLabResults(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'workupSubmitted' => 'required|string',
            'other_workups' => 'nullable|string',
            'labResults' => 'required|array',
            'labResults.*' => 'mimes:pdf,jpeg,jpg,png|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $workup_details = Workup::where('workup_name', $request['workupSubmitted'])->first();

        if (!$workup_details) {
            return response()->json(['error' => 'Workup not found'], 404);
        }

        $patientId = $request->input('patient_id');
        $doctorId = $request->input('doctor_id');
        $otherWorkups = $request->input('other_workups');
        $workupId = $workup_details->workup_id;

        // Save files and store paths
        $filePaths = [];
        if ($request->hasFile('labResults')) {
            foreach ($request->file('labResults') as $file) {
                $path = $file->store('lab_results', 'public'); // Store file in storage/app/public/lab_results
                $filePaths[] = $path;
            }
        }

        $labSubmission = LabsSubmitted::create([
            'patient_id' => $patientId,
            'doctor_id' => $doctorId,
            'labSubmission_date' => now(),
            'workup_id' => $workupId,
            'labFileSubmissions' => json_encode($filePaths), // Store as JSON
            'labSubmission_notes' => $otherWorkups,
        ]);

        return response()->json(['message' => 'Lab results submitted successfully!', 'labSubmission' => $labSubmission]);
    }

    public function getLabFiles($labSubmittedId)
    {
        $labSubmission = LabsSubmitted::find($labSubmittedId);

        if (!$labSubmission) {
            return response()->json(['error' => 'Lab submission not found'], 404);
        }

        $files = json_decode($labSubmission->labFileSubmissions, true);

        // Encode file paths for safe URL usage
        $encodedFiles = array_map(function ($file) {
            return urlencode($file);
        }, $files);

        return response()->json(['files' => $encodedFiles]);
    }



    public function downloadLabFile($filePath)
    {
        // Decode the encoded file path
        $decodedPath = urldecode($filePath);

        // Construct the full path
        $fullPath = storage_path('app/public/' . $decodedPath);

        // Check if file exists
        if (!file_exists($fullPath)) {
            return response()->json(['error' => 'File not found'], 404);
        }

        // Return the file for download
        return response()->download($fullPath);
    }


    public function getFilesByLabSubmissionId($labSubmittedId)
    {
        $labSubmission = LabsSubmitted::find($labSubmittedId);

        if (!$labSubmission) {
            return response()->json(['error' => 'Lab submission not found'], 404);
        }

        $files = json_decode($labSubmission->labFileSubmissions, true);

        if (empty($files)) {
            return response()->json(['error' => 'No files found for this submission'], 404);
        }

        // Generate public URLs for the files
        $fileUrls = array_map(function ($file) {
            return url('storage/' . $file); // Generate public URL
        }, $files);

        return response()->json([
            'labSubmitted_id' => $labSubmission->labSubmitted_id,
            'files' => $fileUrls,
        ]);
    }
}
