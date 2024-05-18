<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\DelegadosProvinciales;
class DelegadosProvincialesController extends Controller
{
    public function ConsultaDelegadosProvinciales(Request $request)
    {
    $request->validate([
        'provincia' => 'required|integer',
        'cedula' => 'required|string',
    ]);

    $delegado = DelegadosProvinciales::where('provincia', $request->provincia)->get();

    return response()->json(['message' => 'El delegado  ' . $delegado->nombres . 'esta acreditado para participar en la eleccion de directiva provincial de'.$delegado->provincias]);

    }
}
