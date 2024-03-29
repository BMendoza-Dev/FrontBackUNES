<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\Parroquias;
use Illuminate\Support\Facades\Http;
class ParroquiasController extends Controller
{
    public function CargarParroquias()
     {
        $ListaParroquias = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/parroquias');

        foreach (collect($ListaParroquias->json()) as $parroquia) {
            // Verificar si la parroquia ya existe en la base de datos
            if (!Parroquias::where('id', $parroquia['id'])->exists()) {
                // Crear y guardar la parroquia solo si no existe en la base de datos
                $newparroquia = new Parroquias();
                $newparroquia->id = $parroquia['id'];
                $newparroquia->cantone_id = $parroquia['idcanton'];
                $newparroquia->circunscripcione_id = $parroquia['idcircunscripcion'];
                $newparroquia->parroquia = $parroquia['parroquia'];
                $newparroquia->est = $parroquia['est'];
                $newparroquia->distrito_id = $parroquia['iddistrito'];
                $newparroquia->save();
            }
        }

     }
}
