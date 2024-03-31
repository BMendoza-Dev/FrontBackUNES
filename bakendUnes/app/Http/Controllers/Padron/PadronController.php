<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Padron\Adherentes;
use App\Models\Padron\Padronelectoral;
class PadronController extends Controller
{
    public function consultarAdherentePermanente(Request $request)
    {

        $adherente = Adherentes::where('cedula', $request->cedula)
        ->whereIn('tipo', ['ADHERENTE PERMANENTE', 'ADHERENTE'])
        ->first();

        // Retornar la respuesta de la consulta
        if ($adherente) {
            // Retornar el nombre del adherente
            return response()->json(['nombre' => $adherente->nombres, 'cedula' => $adherente->cedula, 'tipo' => $adherente->tipo ]);
        } else {
            // Retornar un mensaje indicando que no se encontró un adherente permanente con la cédula especificada
            return response()->json(['mensaje' => 'La cedula ingresada no pertenece a un ADHERENTE']);
        }
    }

    public function validarcedula(Request $request){
        $response = Http::get("https://srienlinea.sri.gob.ec/movil-servicios/api/v1.0/deudas/porIdentificacion/{$request->cedula}");

        if ($response->successful()) {

            if ($response['contribuyente']['tipoIdentificacion'] === 'C') {
                $nombreComercial = $response['contribuyente']['nombreComercial'] ?? null;
                return response()->json(['nombre' => $nombreComercial]);
            }else{
                return response()->json(['message' => 'Cédula incorrecta','code'=> '422']);
            }
        } else {
            return response()->json(['message' => 'Cédula incorrecta','code'=> '200']);
        }
    }

    public function CrucePadronAdherentes()
    {

        $adherentes = Adherentes::all();

// Iterar sobre cada registro de adherente
        foreach ($adherentes as $adherente) {
    // Buscar en la tabla padronelectorals por la cédula del adherente
        $registroPadron = Padronelectoral::where('cedula', $adherente->cedula)->first();
    
    // Si se encuentra un registro en padronelectorals con la misma cédula
        if ($registroPadron) {
        // Marcar el campo adherente como 'Sí'
        $registroPadron->adherente = $adherentes->tipo;
        $registroPadron->save();
        }
        }
    }

    public function DataEmpadronado(Request $request){
        $response = Http::get("https://yosoyrc5.com/api/padron2023?cedula=eq.{$request->cedula}");

        return response()->json( $response);
    
    }
}
