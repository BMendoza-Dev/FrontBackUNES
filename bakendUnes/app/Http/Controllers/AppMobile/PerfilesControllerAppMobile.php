<?php

namespace App\Http\Controllers\AppMobile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Imagen;
use App\Models\localizacion;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Biografia;
use App\Models\Comision;
use App\Models\Divisionterritorial;
use App\Models\Categorie;
use App\Models\Permisos;
use App\Models\Roles;
use Illuminate\Support\Facades\Gate;

class PerfilesControllerAppMobile extends Controller
{
    public function ListarPerfiles (){

        
        $perfiles = Perfil::where('active', 1)
    ->with('image')
    ->get()
    ->map(function($perfil) {
      //  $imagen = $perfil->image->imagen ? $perfil->image->imagen : null;
     //   $imagen =;
        $curul = $perfil->curul ?? null;
        return [
            'id' => $perfil->id,
            'lastName' => $perfil->lastName,
            'firstName' => $perfil->firstName,
            'territorialDivision' => $perfil->territorialDivision,
            'imagen' =>  $perfil->image,
            'curul' => $curul
        ];
    });

return response()->json($perfiles);
    }

    public function ObtenerTerritorio (){
     
        $datos=Divisionterritorial::get();

       
        return  response()->json($datos);
    }

    public function ObtenerAsambleistaTerritorio (Request $request){
       
        $datos=Perfil::where('territorialDivision', $request->territorialDivision)->with('image')->get();

        return  response()->json($datos);
    }
}
