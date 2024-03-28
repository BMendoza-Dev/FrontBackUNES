<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\Provincias;
class ProvinciaController extends Controller
{
    public function CargarProvincias()
     {
        $ListaProvincias = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/provincias');

        foreach (collect($ListaProvincias->json()) as $provincia){
            $newprovincia = new Provincias();
            $newprovincia->id=$provincia['id'];
            $newprovincia->paise_id=$provincia['idpais'];
            $newprovincia->provincia=$provincia['provincia'];
            $newprovincia->codtel=$provincia['codtel'];
            $newprovincia->distritos=$provincia['distritos'];
            $newprovincia->save();
        }

     }
}
