<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\Circunscripciones;
class CircunscripcionesController extends Controller
{
    public function CargarCircunscripciones()
     {
        $ListaCircunscripciones = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/circunscripciones');

        foreach (collect($ListaCircunscripciones->json()) as $circunscripcion){
            $newcircunscripcion = new Paises();
            $newcircunscripcion->id=$circunscripcion['id'];
            $newcircunscripcion->cantone_id=$circunscripcion['idcanton'];
            $newcircunscripcion->circunscripcion=$circunscripcion['circunscripcion'];

            $newdistrito->save();
        }

     }
}
