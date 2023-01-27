<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Hash;
use App\Models\Perfil;
use App\Models\Imagen;
use App\Models\User;
class PerfilesController extends Controller
{
    public function index()
    {
        $validacion= Perfil::get();
        if(!$validacion->isEmpty()){
            return response()->json("Perfiles Cargados en la base de datos.");;
        }

        $Perfiles2 = new Perfil();
        $Perfiles2->id=1;
        $Perfiles2->active=1;
        $Perfiles2->curul=0;
        $Perfiles2->firstName='UNES';
        $Perfiles2->jurisdiction='ECUADOR';
        $Perfiles2->lastName='UNION POR LA ESPERANZA';
        $Perfiles2->politicalParty='UNES';
        $Perfiles2->territorialDivision='ECUADOR';
        $Perfiles2->usedFirstName='UNION POR LA ESPERANZA';
        $Perfiles2->usedLastName='UNION POR LA ESPERANZA';
        $Perfiles2->Imagen()->create(['id'=>'1','imagen' => "foto unes" ]);
        $Perfiles2->imagen_id=1;
        $Perfiles2->save();

        $user= new User();
        $user->name='Super Admin';
        $user->email='superadmin@hotmail.com';
        $user->estado=1;
        $user->password=Hash::make('12345678');
        $user->perfil_id=1;
        $user->rol_id=1;
        $user->save();

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

    public function ListarPerfiles (){
        $validacion= Perfil::where('active',1)->get();
        return response()->json($validacion);
    }
}

