<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PerfilesController extends Controller
{
    public function index()
    {
        $tokenapi = Http::asForm()->post('http://apiapp.asambleanacional.gob.ec/auth/login', [
            'username' => '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62',
            'password' => '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134',
        ]);

        $token = $tokenapi->json();


$headers = [
  'Content-Type' => 'application/jason',
  'Authorization' => 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2ODU2NkQ1OTcxMzM3NDM2NzczOTdBMjQ0MzI2NDYyOTQ4NDA0RDYzNTE2NjU0NkE1NzZFNUE3MjM0NzUzNzc4MjE0MTI1NDQyQTQ3MkQ0QjYxNTA2NDUyNjc1NTZCNTg3MDMyNzMzNTc2Mzg3OTJGNDIzRjQ1Mjg0ODJCNEQ2MiIsInNjb3BlIjoicmVhZCIsImlhdCI6MTY3NDUzMTExOCwiZXhwIjoxNjc0NTMyOTE4fQ.prokX0NtpoWFAzKhjoHk0Yk-RTMAsPJ8tZXbUws4V3n7sGt3pkxau3BgAgWIxueHpSnWE5ENrwnVm03JzCDBVQ'
];

$response = Http::withHeaders($headers)->get('http://apiapp.asambleanacional.gob.ec/periodsResource/findActivePeriod');
//$request = new Http::get('http://apiapp.asambleanacional.gob.ec/periodsResource/findActivePeriod', $headers);

      /*  $response = Http::withHeaders([
            'Content-Type' => 'application/jason',
            'Authorization' => $token['token']
        ])->get('http://apiapp.asambleanacional.gob.ec/periodsResource/findActivePeriod');*/

   // $response = Http::withToken($token['token'])->post('http://apiapp.asambleanacional.gob.ec/periodsResource/findActivePeriod');
     //  dd($data);
     dd($response);
        return   $response->json()  ;
    }
}
