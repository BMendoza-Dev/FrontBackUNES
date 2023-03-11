<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Temaavotacion;
class VotacionesController extends Controller
{
    public function listarVotacionesAsambleista(Request $request){
        $ListaDeVotos = Perfil::where('id',$request->id)->with('Temaavotaciones')->get();

        return $ListaDeVotos;
    }
}
