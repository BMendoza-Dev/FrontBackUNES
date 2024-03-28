<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\Distritos;
class DistritosController extends Controller
{
    public function CargarDistritos()
     {
        $ListaDistritos = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/distritos');

        foreach (collect($ListaDistritos->json()) as $distrito){
            $newdistrito = new Paises();
            $newdistrito->id=$distrito['id'];
            $newdistrito->provincia_id=$distrito['idprovincia'];
            $newdistrito->distritos=$distrito['distrito'];

            $newdistrito->save();
        }

     }
}
