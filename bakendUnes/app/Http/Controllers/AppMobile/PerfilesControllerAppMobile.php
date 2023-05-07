<?php

namespace App\Http\Controllers\AppMobile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Imagen;
use App\Models\localizacion;
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
}
