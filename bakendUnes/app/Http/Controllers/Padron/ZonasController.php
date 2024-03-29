<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\Zonas;
use Illuminate\Support\Facades\Http;
class ZonasController extends Controller
{
    public function CargarZonas()
     {
        $ListaZonas = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/zonas');

        foreach (collect($ListaZonas->json()) as $zona) {
            // Verificar si la zona ya existe en la base de datos
            if (!Zonas::where('id', $zona['id'])->exists()) {
                // Crear y guardar la zona solo si no existe en la base de datos
                $newzona = new Zonas();
                $newzona->id = $zona['id'];
                $newzona->circunscripcione_id = $zona['idcircunscripcion'];
                $newzona->parroquia_id = $zona['idparroquia'];
                $newzona->save();
            }

        }
    }
}
