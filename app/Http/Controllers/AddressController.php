<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Address;
use App\Models\Region;
use App\Models\Province;
use App\Models\City;
use App\Models\Municipality;

class AddressController extends Controller
{
    /**
     * Fetch all regions.
     * 
     * */
    public function getRegions()
    {
        return Region::all();
    }

     /**
     * Fetch provinces by region ID.
     * 
     * @param int $regionId
     *
     * */
    public function getProvinces($regionId)
    {
        return Province::where('region_id', $regionId)->get();
    }

    /**
     * Fetch cities by province ID.
     * 
     * @param int $provinceId
     * 
     * */
    public function getCities($provinceId)
    {
        return City::where('province_id', $provinceId)->get();
    }

     /**
     * Fetch municipalities by province ID.
     * 
     * @param int $provinceId
     * 
     */
    public function getMunicipalities($provinceId)
    {
        return Municipality::where('province_id', $provinceId)->get();
    }

    /**
     * Store a new address.
     * 
     * @param \Illuminate\Http\Request $request
     * 
     */
    public function store(Request $request)
    {
        $request->validate([
            // 'address_number' => 'required|string',
            // 'address_street' => 'required|string',
            // 'address_brgy' => 'required|string',
            // 'address_zipcode' => 'required|string',
            'region_id' => 'required|exists:regions,region_id',
            'province_id' => 'required|exists:provinces,province_id',
            'city_id' => 'nullable|exists:cities,city_id',
            'municipality_id' => 'nullable|exists:municipalities,municipality_id',
        ]);

        $address = Address::create($request->all());

        return response()->json($address, 201); // Return created address with 201 status
    }
}
