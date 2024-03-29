<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Padron\Adherentes;
class PadronController extends Controller
{
    public function consultarAdherentePermanente(Request $request)
    {

            $adherente = Adherentes::where('cedula', $request->cedula)
            ->where('tipo', 'ADHERENTE PERMANENTE')
            ->first();

        // Retornar la respuesta de la consulta
        if ($adherente) {
            // Retornar el nombre del adherente
            return response()->json(['nombre' => $adherente->nombres, 'cedula' => $adherente->cedula]);
        } else {
            // Retornar un mensaje indicando que no se encontró un adherente permanente con la cédula especificada
            return response()->json(['mensaje' => 'La cedula ingresada no pertenece a un ADHERENTE PERMANENTE']);
        }
    }
}
