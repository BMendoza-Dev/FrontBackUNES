<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\Zonas;
class ZonasController extends Controller
{
    public function CargarZonas()
     {
        $ListaZonas = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/zonas');

        foreach (collect($ListaZonas->json()) as $zona){
            $newzona = new Paises();
            $newzona->id=$zona['id'];
            $newzona->pais=$zona['idcircunscripcion'];
            $newzona->codtel=$zona['idparroquia'];
            $newzona->codtel=$zona['zona'];
            $newzona->save();

        }
    }
}
