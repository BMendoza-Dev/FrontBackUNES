<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Temaavotacion;
class VotacionesController extends Controller
{
    public function listarVotacionesAsambleista(Request $request){

        $ListaDeVotos = Temaavotacion::whereHas('perfiles',function($query) use ($request) {
            $query->where('perfil_temaavotacion.perfil_id', $request->id);
        
        })->with([ 'tema' => function ($query) {

                $query->with( 'sesion' );
        }])->get()->map(function($ListaDeVotos) {
            return [
                'id' => $ListaDeVotos->id,
                'description' => $ListaDeVotos->description,
                'initialDate' =>$ListaDeVotos->initialDate,
                'voto' => $ListaDeVotos->pivot->voto,
                'sesion' => $ListaDeVotos->tema->sesion->sesion

            ];
        });

        return $ListaDeVotos;
    }
}
