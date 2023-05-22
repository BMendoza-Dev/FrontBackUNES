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
       
        $datos=Perfil::where('territorialDivision', $request->territorialDivision)->with('image')->get()
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

        return  response()->json($datos);
    }

    public function ObtenerPerfil (Request $request){
        $Perfilesfinal= Perfil::where('id',$request->id)->with('image')->with('localizacion')->with('comisiones')->get()
        ->map(function($perfil) {
          //  $imagen = $perfil->image->imagen ? $perfil->image->imagen : null;
         //   $imagen =;
            $curul = $perfil->curul ?? null;
            return [
                'id' => $perfil->id,
                'lastName' => $perfil->lastName,
                'firstName' => $perfil->firstName,
                'territorialDivision' => $perfil->territorialDivision,
                'curul' => $curul,
                'jurisdiction' => $perfil->jurisdiction,
                'politicalParty' => $perfil->politicalParty,
                'territorialDivision' => $perfil->territorialDivision,
                'biografia_id' => $perfil->biografia_id,
                'email' => $perfil->email,
                'localizacion' => $perfil->localizacion,
                'comisiones' => $perfil->comisiones,
                'imagen' =>  $perfil->image,
            ];
        });

        
        if($Perfilesfinal->isEmpty()){
            return  response()->json(['error'=>'404']);
        }


        return  response()->json($Perfilesfinal[0]);
           
     }

     public function ObtenerBiografia (Request $request){
        $Perfilesfinal= Perfil::where('id',$request->id)->with(['biografia'=> function ($query){
            $query->with('image');
        }])->get();

        
        if($Perfilesfinal[0]->biografia_id==null){
            return  response()->json(['error'=>'404']);
        }
        return  response()->json($Perfilesfinal[0]->biografia);
           
     }
     public function ObtenerNotifyUserApp (Request $request){

      }

}
