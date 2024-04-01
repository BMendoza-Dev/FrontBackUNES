<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Padron\Provincias;
use App\Models\Padron\Padronelectoral;
use App\Models\Padron\Adherentes;
use Illuminate\Support\Facades\Http;
use App\Models\Padron\Zonas; // Importa el modelo Zona
class PadronelectoralsController extends Controller
{


    public function CargarPadronElectoral(Request $request)
    {
    // Obtener todas las provincias de la base de datos
        $provincias = Provincias::all();

    // Iterar sobre cada provincia
        foreach ($provincias as $provincia) {
        // Obtener el ID de la provincia
            $provinciaId = $provincia->id;

        // Hacer una solicitud a la API para obtener las personas empadronadas en esta provincia
            $response = Http::get("https://rc5ec.com/api/padron2023?cod_provincia=eq.{$provinciaId}");

        // Verificar si la solicitud fue exitosa y el cuerpo de la respuesta es un JSON válido
            if ($response->successful() && $response->json()) {
                $personas = $response->json();

            // Iterar sobre cada persona y guardarla en la base de datos
                foreach ($personas as $persona) {
                // Buscar o crear una nueva zona


                // Crear el registro en la tabla PadronElectoral
                    PadronElectoral::create([
                    'nom_padron' => $persona['nom_padron'],
                    'cedula' => $persona['cedula'],
                        'nom_recinto' => $persona['nom_recinto'],
                        'junta' => $persona['junta'],
                        'sexo' => $persona['sexo'],
                        'provincia_id' => $provinciaId,
                        'cantone_id' => $persona['cod_canton'],
                        'parroquia_id' => $persona['cod_parroquia'],
                   // 'zona_id' => $zona->cod_zona, // Utiliza el ID de la zona
                        'adherente' => $persona['adherente'] ?? null
                    ]);
                }
            }
        }

    // Si se han guardado correctamente los datos, puedes devolver una respuesta de éxito
        return response()->json(['message' => 'Datos del padrón electoral cargados exitosamente.']);
    }

    public function ActualizarAdherentesPadronElectoral(Request $request)
    {

        $adherentes = Adherentes::where('tipo', 'ADHERENTE PERMANENTE')->get();
        foreach ($adherentes as $adherente) {
            $cedula = $adherente->cedula;
        
            // Verificar si la cédula ya existe en padronelectoral y el campo adherente no es nulo
            $existente = Padronelectoral::where('cedula', $cedula)
                ->whereNotNull('adherente')
                ->exists();
        
            if ($existente) {
                continue; // Saltar este registro si la cédula ya existe y el campo adherente no es nulo
            }
        
            // Realizar solicitud a la API
            $response = Http::get('https://yosoyrc5.com/api/padron2023?cedula=eq.' . $cedula);
        

            
            // Verificar si la solicitud fue exitosa y si se encontró información
            if ($response->successful() && !empty($response->json())) {
                $data = $response->json()[0];
                // Verificar si el registro ya existe en padronelectoral
                $padronExistente = Padronelectoral::where('cedula', $cedula)->exists();
                if ($padronExistente) {
                    // Actualizar el registro existente en padronelectoral con información del adherente
                    Padronelectoral::where('cedula', $cedula)->update([
                        'adherente' => $adherente->tipo
                    ]);
                } else {
                    // Crear un nuevo registro en padronelectoral
                    Padronelectoral::create([
                        'nom_padron' => $data['nom_padron'],
                        'cedula' => $data['cedula'],
                        'nom_recinto' => $data['nom_recinto'],
                        'junta' => $data['junta'],
                        'sexo' => $data['sexo'],
                        'provincia_id' => $data['cod_provincia'],
                        'cantone_id' => $data['cod_canton'],
                        'parroquia_id' => $data['cod_parroquia'],
                        'adherente' => $adherente->tipo,
                        // Agregar otras columnas según sea necesario
                    ]);
                }
            }
        }
    }

    public function Todaldedatos(Request $request)
    {
    // Obtener cédulas de los adherentes permanentes
        $cedulas = Adherentes::where('tipo', 'ADHERENTE PERMANENTE')->pluck('cedula')->toArray();

    // Realizar solicitud a la API con la lista de cédulas
        $response = Http::get('https://yosoyrc5.com/api/padron2023', [
        'cedula' => 'in.('.implode(',', $cedulas).')'
        ]);

    // Verificar si la solicitud fue exitosa y devolver los datos en formato JSON
        if ($response->successful()) {
        return $response->json();
        } else {
        // Manejar el caso en que la solicitud no fue exitosa
        return response()->json(['error' => 'Error al obtener los datos de la API'], 500);
        }
    }


}
