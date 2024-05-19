<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Padron\DelegadosProvinciales;
class DelegadosProvincialesController extends Controller
{
    public function ConsultaDelegadosProvinciales(Request $request)
{
    // Validar los datos de entrada

    // Buscar el delegado en la base de datos
    $delegado = DelegadosProvinciales::where('provincia', $request->provincia)
                                     ->where('cedula', $request->cedula)
                                     ->first();

    // Verificar si el delegado existe
    if ($delegado) {
        // Si el delegado existe, devolver una respuesta exitosa
        return response()->json([
            'message' => 'La persona ' . $delegado->nombres . ' está acreditada para participar en la elección de directiva provincial de ' . $request->provincia, 'code'=> '200'
        ]);
    } else {
        // Si el delegado no existe, devolver una respuesta de error
        return response()->json([
            'message' => 'La cedula ingresada no pertenece a una persona acreditada para participar en la eleccion provincial de '. $request->provincia,'code'=> '400'
        ]);
    }
}
}
