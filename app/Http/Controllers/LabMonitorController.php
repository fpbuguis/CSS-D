<?php

namespace App\Http\Controllers;

use App\Models\LabMonitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LabMonitorController extends Controller
{
     /**
     * Retrieve all lab monitors with related models.
     */
    public function getAllLabMonitors()
    {
        $labMonitors = LabMonitor::with(['cancerType', 'workup', 'workupType'])->get();
        return response()->json($labMonitors, 200); 
    }

    /**
     * Fetch lab monitors based on a specific body site.
     * 
     * @param int $bodySiteId
     */
    public function getLabMonitorsByPrimarySite($bodySiteId)
    {
        // Validate the body site ID
        $validator = Validator::make(['bodySiteId' => $bodySiteId], [
            'bodySiteId' => 'required|integer|exists:body_sites,body_site_id',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Invalid or non-existent body site ID.'], 422);
        }

        // Retrieve lab monitors linked to the specified body site
        $labMonitors = LabMonitor::with(['cancerType', 'workup', 'workupType'])
            ->where('cancer_type', $bodySiteId)
            ->get();

        if ($labMonitors->isEmpty()) {
            return response()->json(['message' => 'No symptoms found for the specified body site.'], 404);
        }

        return response()->json($labMonitors, 200);
    }
}
