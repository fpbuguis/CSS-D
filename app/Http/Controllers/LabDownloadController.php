<?php

namespace App\Http\Controllers;

use App\Models\LabsDownload;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LabDownloadController extends Controller
{
    /**
     * Create a new lab download record and return a PDF file if available.
     */
    public function createLabDownload(Request $request)
    {
        // Validate request data
        $request->validate([
            'patient_id' => 'required|exists:patients,patient_id',
            'workup_id' => 'required|exists:workups,workup_id',
        ]);

        // Create a new lab download record
        $labDownload = LabsDownload::create([
            'patient_id' => $request->patient_id,
            'workup_id' => $request->workup_id,
            'labReq_date' => Carbon::create(now())->toDateString(),
        ]);

        // Define the file path
        $filePath = public_path("Laboratory Request.pdf");

        // Check if file exists and return it
        if (file_exists($filePath)) {
            return response()->download($filePath, 'test.pdf', [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' =>  'attachment; filename="test.pdf"'
            ]);
        } else {
            // Return error if file not found
            return response()->json([
                'message' => 'File not found.',
            ], 404);
        }
    }

    /**
     * Fetch all lab downloads for a specific patient.
     * 
     * @param int $patientId
     */
    public function getLabDownloadsByPatient($patientId)
    {
        // Retrieve lab downloads with related workup data
        $labDownloads = LabsDownload::where('patient_id', $patientId)
        ->with(['workup'])
        ->get();

        // Check if records exist
        if ($labDownloads->isEmpty()) {
            return response()->json([
                'message' => 'No lab downloads found for this patient.',
            ], 404);
        }

        // Return lab downloads data
        return response()->json([
            'data' => $labDownloads,
        ]);
    }
}
