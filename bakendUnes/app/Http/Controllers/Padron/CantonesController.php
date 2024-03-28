<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\Cantones;
class CantonesController extends Controller
{
    public function CargarCantones()
     {
        $ListaCantones = Http::withHeaders([
        'Content-Type' => 'application/json',
        ])->get('https://yosoyrc5.com/api/cantones');

        foreach (collect($ListaCantones->json()) as $canton){
            $newcanton = new Cantones();
            $newcanton->id=$canton['id'];
            $newcanton->provincia_id=$canton['idprovincia'];
            $newcanton->canton=$canton['canton'];
            $newcanton->distrito_id=$canton['iddistrito'];

            $newcanton->save();
        }

     }
}
