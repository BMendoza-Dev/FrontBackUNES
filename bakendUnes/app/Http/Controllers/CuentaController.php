<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Cuenta;
use App\Models\Perfil;
use App\Models\Roles;
use App\Models\User;
class CuentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
     public function ListarUsuariosAsambleistas()
     {

        if(Gate::check('haveacceso','listarUserAsambleista')==false){
            return response()->json('403');
        };
         $datos = User::get();
         
         $datos = User::whereHas('roles', function($q){
             $q->where('slug', 'Asambleista');
         })->with('roles')->get();
       
         $num_rows = count($datos);
         if($num_rows!=0){
            return response()->json($datos);
        }else
            return response()->json(['mensaje'=>"No existen datos registrados", 'code'=>'202']);
     }
 
     public function ListarUsuariosAsistentes()
     {
         
 
         $datos = User::whereHas('roles', function($q){
            $q->where('slug', 'asistente');
         })->with('roles')->get();
       
         $num_rows = count($datos);
         if($num_rows!=0){
            return response()->json($datos);
        }else
        
            return response()->json(['mensaje'=>"No existen datos registrados", 'code'=>'202']);
     }
 
     public function ListarUsuariosAdministrador(){
         $datos = User::whereHas('roles', function($q){
            $q->where('slug', 'super_administrador');
         })->with('roles')->get();
       
         $num_rows = count($datos);
         if($num_rows!=0){
            return response()->json($datos);
        }else
        
            return response()->json(['mensaje'=>"No existen datos registrados", 'code'=>'202']);
     }

     public function ListarUserPorRol(Request $request){
        
        $datos = User::whereHas('roles', function($q) use ($request){
            $q->where('slug', $request->slug);
        })->with('roles')->get();
      
        $num_rows = count($datos);
        if($num_rows!=0){
           return response()->json($datos);
       }else
       
           return response()->json(['mensaje'=>"No existen datos registrados", 'code'=>'404']);
    }

    public function ListarRoles(){
        
        $datos = Roles::get();
      
        $num_rows = count($datos);
        if($num_rows!=0){
           return response()->json($datos);
       }else
       
           return response()->json(['mensaje'=>"No existen roles registrados", 'code'=>'404']);
    }
 
 
     
}