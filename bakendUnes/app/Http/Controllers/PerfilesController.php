<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Perfil;
use App\Models\Imagen;
class PerfilesController extends Controller
{
    public function index()
    {
        $validacion= Perfil::get();
        if(!$validacion->isEmpty()){
            return response()->json("Perfiles Cargados en la base de datos.");;
        }
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
        
        

        foreach ($filtered as $asambleista) {
            $aux=((string)$asambleista["id"]);
           
            $request2 = Http::withHeaders([
                'Content-Type' => 'application/jason',
                'Authorization' => $token['token'],
                //'Content-Disposition'=> 'attachement',
                ])->get('http://apiapp.asambleanacional.gob.ec/assemblyMembersResource/getPhoto/'.$aux);
            $Perfiles = new Perfil();
           // $Imagen = new Imagenes();
            //$Imagen->save();
          //  $Imagen->imagen=$request2;
            $Perfiles->id=$asambleista["id"];
            $Perfiles->active=$asambleista["active"];
            $Perfiles->curul=$asambleista["curul"];
            $Perfiles->firstName=$asambleista["firstName"];
            $Perfiles->jurisdiction=$asambleista["jurisdiction"];
            $Perfiles->lastName=$asambleista["lastName"];
            $Perfiles->politicalParty=$asambleista["politicalParty"];
            $Perfiles->territorialDivision=$asambleista["territorialDivision"];
            $Perfiles->usedFirstName=$asambleista["usedFirstName"];
            $Perfiles->usedLastName=$asambleista["usedLastName"];

            $imagen =['imagen' => $request2 ];
            
            $Perfiles->Imagen()->create($imagen);
           
            $aux4 = Imagen::latest('id')->first();;
           // dd($aux4);
            $Perfiles->imagen_id=$aux4->id;
            $Perfiles->save();

           
            
            
        }
        $aux2=Perfil::all();
        //dd($aux2);
        
        return response()->json("Perfiles Cargados en la base de datos.");;
    }
}

