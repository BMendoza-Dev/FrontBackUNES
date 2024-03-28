<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Padron\Paises;
class PaisController extends Controller
{

    public function CargarPaises()
     {
        $ListaPaises = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/paises');

        foreach (collect($ListaPaises->json()) as $pais){
            $newpais = new Paises();
            $newpais->id=$pais['id'];
            $newpais->pais=$pais['pais'];
            $newpais->codtel=$pais['codtel'];
            $newpais->save();

        }


     }
}
