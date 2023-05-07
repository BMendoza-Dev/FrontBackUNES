<?php

namespace App\Http\Controllers\AppMobile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Imagen;
class PerfilesController extends Controller
{
    public function ListarPerfiles (){
        $validacion= Perfil::where('active',1)->with('image')->with('localizacion')->get();
       
        return response()->json($validacion);
    }
}
