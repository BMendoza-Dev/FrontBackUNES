<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\Parroquias;
class ParroquiasController extends Controller
{
    public function CargarParroquias()
     {
        $ListaParroquias = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/parroquias');

        foreach (collect($ListaParroquias->json()) as $parroquias){
            $newparroquias = new Parroquias();
            $newparroquias->id=$parroquias['id'];
            $newparroquias->cantone_id=$parroquias['idcanton'];
            $newparroquias->circunscripcione_id=$parroquias['idcircunscripcion'];
            $newparroquias->parroquia=$parroquias['parroquia'];
            $newparroquias->est=$parroquias['est'];
            $newparroquias->distrito_id=$parroquias['iddistrito'];
            $newparroquias->save();
        }

     }
}
