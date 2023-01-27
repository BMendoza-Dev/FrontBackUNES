<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Cuenta;
use App\Models\Perfil;
use App\Models\Rol;
class CuentaController extends Controllers
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $datos = Cuenta::whereHas('rol', function($q){
            $q->where('id', 2);
        })->with('rol')->get();
      
        $num_rows = count($datos);
        if($num_rows!=0){
           return response()->json($datos);
       }else
           return response()->json(['mensaje'=>"No existen datos registrados", 'code'=>'202']);
    }

    public function asistentes()
    {
        $datos = Cuenta::whereHas('rol', function($q){
            $q->where('id', 3);
        })->with('rol')->get();
      
        $num_rows = count($datos);
        if($num_rows!=0){
           return response()->json($datos);
       }else
       
           return response()->json(['mensaje'=>"No existen datos registrados", 'code'=>'202']);
    }


    public function validar ($correo){

        $datos=Cuenta::where('correo', $correo)->with('rol')->get();

        $num_rows = count($datos);
        if($num_rows != 0){

            if($datos[0]['rol']['estado'] == 1 && $datos[0]['estado'] == 1){
                return response()->json(['result'=>$datos, 'code'=>'201']);
            }else{
                return response()->json(['mensaje'=>"Usuario desabilitado", 'code'=>'203']);
            }

        }else{
            return response()->json(['mensaje'=>"Usuario no encontrado", 'code'=>'202']);
        }
    }
}