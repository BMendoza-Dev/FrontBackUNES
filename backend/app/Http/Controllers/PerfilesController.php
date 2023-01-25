<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Perfil;
class PerfilesController extends Controller
{
    public function index()
    {
        $tokenapi = Http::asForm()->post('http://apiapp.asambleanacional.gob.ec/auth/login', [
            'username' => '68566D597133743677397A244326462948404D635166546A576E5A7234753778214125442A472D4B6150645267556B58703273357638792F423F4528482B4D62',
            'password' => '397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D6251655468576D5A7134',
        ]);

        $token = $tokenapi->json();

        $request = Http::withHeaders([
        'Content-Type' => 'application/jason',
        'Authorization' => $token['token'],
        ])->get('http://apiapp.asambleanacional.gob.ec/assemblyMembersResource/find/6/0/0/false/false/false/0/0/0');

        $asambleistas= collect($request->json());
        $filtered = $asambleistas->whereIn('politicalParty', ["UNIÓN POR LA ESPERANZA"])->whereIn("active",[true]);
        $request2 = Http::withHeaders([
            'Content-Type' => 'application/jason',
            'Authorization' => $token['token'],
            'responseType' => 'blob',
            ])->get('http://apiapp.asambleanacional.gob.ec/assemblyMembersResource/getPhoto/2308/');
            $aux= collect($request2->json());
            dd($aux);
            return $request2->json();

        foreach ($filtered as $asambleista) {

            $Perfiles = new Perfil();
            $Perfiles->id_perfil=$asambleista["id"];
            $Perfiles->active=$asambleista["active"];
            $Perfiles->curul=$asambleista["curul"];
            $Perfiles->firstName=$asambleista["firstName"];
            $Perfiles->jurisdiction=$asambleista["jurisdiction"];
            $Perfiles->lastName=$asambleista["lastName"];
            $Perfiles->politicalParty=$asambleista["politicalParty"];
            $Perfiles->territorialDivision=$asambleista["territorialDivision"];
            $Perfiles->usedFirstName=$asambleista["usedFirstName"];
            $Perfiles->usedLastName=$asambleista["usedLastName"];
            $Perfiles->save();
        }
        

       // dd($request);
        return  $filtered->all();

    }
}
