<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Temaavotacion;
class VotacionesController extends Controller
{
    public function listarVotacionesAsambleista(Request $request){


        $valorAFiltrar = $request->id;

$resultados = Temaavotacion::whereHas('perfiles', function($query) use ($valorAFiltrar) {
    $query->where('perfil_temaavotacion.perfil_id', $valorAFiltrar);
})->with(['perfiles' => function($query) use ($valorAFiltrar) {
    $query->where('perfil_temaavotacion.perfil_id', $valorAFiltrar)->withPivot('voto');
}])->with([ 'tema' => function ($query) {

    $query->with( 'sesion' );
}])->orderBy('initialDate', 'desc')->get()->map(function($resultados) {
    return [
        'id' => $resultados->id,
        'description' => $resultados->description,
        'initialDate' =>$resultados->initialDate,
        'voto' => $resultados->perfiles[0]->pivot->voto,
        'sesion' => $resultados->tema->sesion->sesion

    ];
});

return ($resultados);


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
