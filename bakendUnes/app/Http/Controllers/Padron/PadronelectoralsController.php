<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Padron\Paises;
use App\Models\Padron\Provincias;
use App\Models\Padron\Cantones;
use App\Models\Padron\Parroquias;
use App\Models\Padron\Infopadronelectoral;
use App\Models\Padron\Padronelectoral;
use App\Models\Padron\Adherentes;
use Illuminate\Support\Facades\Http;
use App\Models\Padron\Zonas; // Importa el modelo Zona}



use Illuminate\Support\Facades\DB;
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

    public function ActualizarAdherentesPadronElectoral()
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

    public function Todaldedatos()
{
    // Obtener cédulas de los adherentes permanentes
    $cedulas = Adherentes::where('tipo', 'ADHERENTE')->pluck('cedula')->toArray();

    // Dividir las cédulas en lotes de 1000
    $lotes = array_chunk($cedulas, 2500);

    // Inicializar un array para almacenar los datos de la API
    $datosTotales = [];

    // Realizar una solicitud a la API para cada lote de cédulas
    foreach ($lotes as $lote) {
        // Convertir el lote de cédulas en una cadena separada por comas
        $cedulasConcatenadas = implode(',', $lote);

        // Realizar solicitud a la API con el lote de cédulas
        $response = Http::get('https://yosoyrc5.com/api/padron2023', [
            'cedula' => 'in.('. $cedulasConcatenadas .')'
        ]);

        // Verificar si la solicitud fue exitosa y agregar los datos al array total
        if ($response->successful()) {
            $datos = $response->json(); // Obtener los datos en formato JSON
            $datosTotales = array_merge($datosTotales, $datos); // Agregar los datos al array total
        } else {
            // Manejar el caso en que la solicitud no fue exitosa
            // Puedes registrar un error o manejarlo según sea necesario
        }
    }

    // Devolver los datos totales obtenidos de todas las solicitudes
    return response()->json($datosTotales);
}
    public function Leerjson()
    {   
    // Ruta al archivo JSON en la carpeta public
    $jsonFilePath = public_path('ADHERENTE PERMANETE.json');

    // Verifica si el archivo existe
    if (file_exists($jsonFilePath)) {
        // Lee el archivo JSON
        $json = file_get_contents($jsonFilePath);
        $data = json_decode($json, true);

        // Itera sobre cada objeto en el archivo JSON
        foreach ($data as $item) {
            // Crea un nuevo registro en la tabla padronelectorals
            Padronelectoral::create([
                'nom_padron' => $item['nom_padron'],
                'cedula' => $item['cedula'],
                'nom_recinto' => $item['nom_recinto'],
                'junta' => $item['junta'],
                'sexo' => $item['sexo'],
                'adherente' => 'ADHERENTE', // Define el valor de la columna adherente
                // Si tienes las relaciones definidas en los modelos, puedes asignar los IDs correspondientes aquí
                'provincia_id' => $item['cod_provincia'],
                'cantone_id' => $item['cod_canton'],
                'parroquia_id' => $item['cod_parroquia'],
                
            ]);
        }
    } else {
        // Maneja el caso en que el archivo no exista
        // Puedes registrar un error o manejarlo según sea necesario
        echo "El archivo JSON no existe en la carpeta public.";
    }
    }


    public function generarJsonSegunProvincia(Request $request)
    {

            // Validar la solicitud
            $request->validate([
                'cod_provincia' => 'required|integer',
                'nombre_archivo' => 'required|string',
            ]);
    
            // Obtener el ID de la provincia y el nombre del archivo desde la solicitud
            $cod_provincia = $request->cod_provincia;
            $nombre_archivo = $request->nombre_archivo;
    
            // Obtener la respuesta JSON de la otra API
            $response = Http::timeout(10000)->get('https://rc5ec.com/api/padron2023?cod_provincia=eq.'.$cod_provincia);
    
            if ($response->successful()) {
                // Guardar la respuesta JSON en un archivo con el nombre proporcionado
                file_put_contents(public_path('/cantones/'.$nombre_archivo . '.json'), $response->body());
    
                return response()->json(['message' => 'Datos capturados y guardados en ' . $nombre_archivo . '.json']);
            } else {
                return response()->json(['error' => 'La solicitud no fue exitosa'], 500);
            }
        
    }

    public function CargarPadron2023(Request $request)
    {
        // Obtener los cantones por provincia
        $CantonesPorProvincia = Http::get('https://yosoyrc5.com/api/cantones?idprovincia=eq.' . $request->idProvincia);
    
        if ($CantonesPorProvincia->successful()) {
            $cantones = $CantonesPorProvincia->json();
    
            // Recorrer los cantones
            foreach ($cantones as $canton) {
                $idCanton = $canton['id'];
    
                // Obtener las parroquias por cantón
                $ParroquiasPorCanton = Http::get('https://yosoyrc5.com/api/parroquias?idcanton=eq.' . $idCanton);
                $parroquias = $ParroquiasPorCanton->json();
    
                foreach ($parroquias as $parroquia) {
                    $idparroquia = $parroquia['id'];
    
                    // Obtener el padrón 2023 por parroquia
                    $response = Http::timeout(10000)->get('https://yosoyrc5.com/api/padron2023?cod_parroquia=eq.' . $idparroquia);
    
                    if ($response->successful()) {
                        $directoryPath = public_path('parroquia');

                    // Obtener el nombre de la parroquia y reemplazar "/" por un espacio si es necesario
                    $parroquiaNombre = $parroquia['parroquia'];
                    if (strpos($parroquiaNombre, '/') !== false) {
                        $parroquiaNombre = str_replace('/', ' ', $parroquiaNombre);
                    }

                    $jsonFilePath = $directoryPath . '/' . $parroquiaNombre . '.json';

                    // Verificar si el directorio existe, si no, crearlo
                    if (!file_exists($directoryPath)) {
                        mkdir($directoryPath, 0777, true);
                    }
    
                        // Guardar la respuesta JSON en un archivo con el nombre proporcionado
                        file_put_contents($jsonFilePath, $response->body());
    
                        // Verificar si el archivo se ha creado correctamente
                        if (file_exists($jsonFilePath)) {
                            // Lee el archivo JSON
                            $json = file_get_contents($jsonFilePath);
                            $data = json_decode($json, true);
    
                            // Itera sobre cada objeto en el archivo JSON
                            foreach ($data as $item) {
                                // Crea un nuevo registro en la tabla padronelectorals
                                Padronelectoral::create([
                                    'nom_padron' => $item['nom_padron'],
                                    'cedula' => $item['cedula'],
                                    'nom_recinto' => $item['nom_recinto'],
                                    'junta' => $item['junta'],
                                    'sexo' => $item['sexo'],
                                    'adherente' => null, // Define el valor de la columna adherente
                                    'provincia_id' => $item['cod_provincia'],
                                    'cantone_id' => $item['cod_canton'],
                                    'parroquia_id' => $item['cod_parroquia'],
                                ]);
                            }
                        } else {
                            // Maneja el caso en que el archivo no exista
                            return response()->json(['error' => 'El archivo JSON no existe en la carpeta public.'], 500);
                        }
                    } else {
                        return response()->json(['error' => 'La solicitud no fue exitosa'], 500);
                    }
                }
            }
        } else {
            // Manejar el error si la solicitud no fue exitosa
            $errorCode = $CantonesPorProvincia->status();
            return response()->json(['error' => "Error en la solicitud HTTP: $errorCode"], 500);
        }
    
        return response()->json(['respuesta' => 'provincia cargada correctamente']);
    }


    public function consultarAdherenteEnPadron(Request $request)
    {

        $adherente = Padronelectoral::where('cedula', $request->cedula)->first();

        // Retornar la respuesta de la consulta
        if($adherente){
            
            if ($adherente->adherente==null) {

        // Usar el método map para transformar los datos y obtener los datos relacionados
        $provincia = Provincias::find($adherente->provincia_id);
        $pais = Paises::find($provincia->paise_id);
        $canton = Cantones::find($adherente->cantone_id);
        $parroquia = Parroquias::find($adherente->parroquia_id);

        // Usar el método map para transformar los datos y obtener los datos relacionados
        $adherente = collect([$adherente])->map(function ($item) use ($provincia, $canton, $parroquia,$pais) {
            return [
                'padronelectoral_id' => $item->id,
                'cedula' => $item->cedula,
                'nom_padron' => $item->nom_padron,
                'nom_pais'=>$pais->pais,
                'provincia_id' => $item->provincia_id,
                'nom_provincia' =>  $provincia->provincia ,
                'canton_id' => $item->cantone_id,
                'nom_canton' =>  $canton->canton,
                'parroquia_id' => $item->parroquia_id,
                'nom_parroquia' =>  $parroquia->parroquia ,
            ];
        })->first();
                // Retornar un mensaje indicando que no se encontró un adherente permanente con la cédula especificada
                return response()->json(['mensaje' => 'LA CEDULA INGRESADA NO PERTENECE A UN ADHERENTE, LLENE EL SIGUIENTE FORMULARIO PARA SER PARTE DE LA RC5', 'error'=>'400', 'data'=>$adherente]);
            } else{

               // dd($adherente->infopadronelectoral()->first());
                if($adherente->infopadronelectoral()->first()==null){
                    $provincia = Provincias::find($adherente->provincia_id);
                    $pais = Paises::find($provincia->paise_id);
                    $canton = Cantones::find($adherente->cantone_id);
                    $parroquia = Parroquias::find($adherente->parroquia_id);
            
                    // Usar el método map para transformar los datos y obtener los datos relacionados
                    $adherente = collect([$adherente])->map(function ($item) use ($provincia, $canton, $parroquia,$pais) {
                        return [
                            'padronelectoral_id' => $item->id,
                            'cedula' => $item->cedula,
                            'nom_padron' => $item->nom_padron,
                            'nom_pais'=>$pais->pais,
                            'provincia_id' => $item->provincia_id,
                            'nom_provincia' =>  $provincia->provincia ,
                            'canton_id' => $item->cantone_id,
                            'nom_canton' =>  $canton->canton,
                            'parroquia_id' => $item->parroquia_id,
                            'nom_parroquia' =>  $parroquia->parroquia ,
                        ];
                    })->first();
                            // Retornar un mensaje indicando que no se encontró un adherente permanente con la cédula especificada
                            return response()->json(['mensaje' => 'LA CEDULA  PERTENECE A UN ADHERENTE, PERO TIENE DATOS IMCOMPLETOS, POR FAVOR LLENE EL SIGUIENTE FORMULARIO PARA COMPLETAR TU REGISTRO', 'error'=>'400', 'data'=>$adherente]);
                }

                return response()->json(['nombre' => $adherente->nom_padron, 'cedula' => $adherente->cedula, 'tipo' => $adherente->adherente, 'code'=>'200' ]);
            }

        }
        else{
            return response()->json(['mensaje' => 'LA CEDULA INGRESADA NO PERTENECE A UN ADHERENTE, LLENE EL SIGUIENTE FORMULARIO PARA SER PARA SER PARTE DE LA RC5', 'error'=>'500']);
        }
    }

    public function CargarCicunsOProvincia(Request $request){

        $validatedData = $request->validate([
            'paise_id' => 'required',
        ]);
    
        try {
            // Obtener los datos del padrón electoral según el país
            $circunsOProvincia = Provincias::where('paise_id', $validatedData['paise_id'])->get();
    
            // Retornar los datos en formato JSON
            return response()->json( $circunsOProvincia);
        } catch (\Exception $e) {
            // Manejo de excepciones
            return response()->json(['error' => 'Ocurrió un error al obtener los datos', 'details' => $e->getMessage()], 500);
        }

    }

    public function Listar_Can_Pais_Cicunscripcion_Prov(Request $request){

        $validatedData = $request->validate([
            'prov_circ_id' => 'required',
        ]);
    
        try {
            // Obtener los datos del padrón electoral según el país
            $list_canton_pais = Cantones::where('provincia_id', $validatedData['prov_circ_id'])->get();
    
            // Retornar los datos en formato JSON
            return response()->json( $list_canton_pais);
        } catch (\Exception $e) {
            // Manejo de excepciones
            return response()->json(['error' => 'Ocurrió un error al obtener los datos', 'details' => $e->getMessage()], 500);
        }

    }

    public function Listar_Parroquia_estado_Canton_Pais(Request $request){

        $validatedData = $request->validate([
            'Esta_Cant_id' => 'required',
        ]);
    
        try {
            // Obtener los datos del padrón electoral según el país
            $list_Parroq_Estado = Parroquias::where('cantone_id', $validatedData['Esta_Cant_id'])->get();
    
            // Retornar los datos en formato JSON
            return response()->json( $list_Parroq_Estado);
        } catch (\Exception $e) {
            // Manejo de excepciones
            return response()->json(['error' => 'Ocurrió un error al obtener los datos', 'details' => $e->getMessage()], 500);
        }

    }


    public function RegistrarTipoAdherenteYRedes(Request $request)
    {
        try {
        // Validar la solicitud
        $validatedData = $request->validate([
            'correo' => 'required|email|max:255',
            'tel' => 'required|string|max:255',
            'redfb' => 'nullable|string|max:255',
            'redtw' => 'nullable|string|max:255',
            'redit' => 'nullable|string|max:255',
            'redttk' => 'nullable|string|max:255',
            'padronelectoral_id' => 'required|exists:padronelectorals,id',
        ]);
    

            // Verificar si ya existe un registro relacionado en Infopadronelectoral
            $infopadronelectoral = Infopadronelectoral::where('padronelectoral_id', $request->padronelectoral_id)->first();
    
            if ($infopadronelectoral) {
                // Si ya existe, retornar un mensaje indicando que no se puede registrar nuevamente
                return response()->json(['message' => 'Ya existe un registro para este padrón electoral. No se puede registrar nuevamente.', 'error' => '400']);
            }
    
            // Buscar el padrón electoral correspondiente
            $padronelectoral = Padronelectoral::find($request->padronelectoral_id);
    
            if (!$padronelectoral) {
                // Manejar el caso donde no se encuentra el padrón electoral
                return response()->json(['message' => 'No se encontró el padrón electoral especificado.', 'code' => '404']);
            }
    
            // Actualizar el campo "adherente" en el modelo Padronelectoral
            if($padronelectoral->adherente==null){
                $padronelectoral->adherente = 'ADHERENTE POR SISTEMA';
                $padronelectoral->save();
            }
            
            // Crear un nuevo registro en Infopadronelectoral
            $infopadronelectoral = new Infopadronelectoral($validatedData);
            $infopadronelectoral->padronelectoral_id = $padronelectoral->id; // Asignar el ID del padrón electoral
            $infopadronelectoral->save();
    
            // Retornar una respuesta de éxito
            return response()->json(['message' => '¡Excelente! Ahora eres parte de la RC5.', 'code'=>'200']);

        } catch (\Exception $e) {
            // Manejo de excepciones

            $mensaje='ERROR AL VALIDAR LOS DATOS';
            if($e->getMessage()=='validation.exists'){
                $mensaje= 'id no encontrado en el padron';
            }
            return response()->json(['error' => 'Error al procesar la solicitud: ' . $mensaje, 'code'=>'400']);
        }
    }


    public function RegistrarDatosAdherenteYRedes(Request $request)
    {
        try {

        // Validar la solicitud
        $validatedPadronelectoral = $request->validate([
            'nom_padron' => 'required|string|max:255',
            'provincia_id' => 'exists:provincias,id',
            'cantone_id' => 'exists:cantones,id',
            'parroquia_id' => 'exists:parroquias,id',
            'cedula' => 'required|string|max:10|unique:padronelectorals,cedula', // Añadir la regla unique aquí
        ]);

        // Validar la solicitud para Infopadronelectoral
        $validatedInfopadronelectoral = $request->validate([
            'correo' => 'required|email|max:255',
            'tel' => 'required|string|max:255',
            'redfb' => 'nullable|string|max:255',
            'redtw' => 'nullable|string|max:255',
            'redit' => 'nullable|string|max:255',
            'redttk' => 'nullable|string|max:255',
        ]);

        $validatedPadronelectoral['nom_recinto'] = 'SIN REGISTRO';
        $validatedPadronelectoral['junta'] = 1; // Junta por defecto
        $validatedPadronelectoral['adherente'] = 'ADHERENTE POR SISTEMA'; // Valor por defecto
        $validatedPadronelectoral['zona_id'] = 1; // ID de zona por defecto


        $response = Http::get("https://srienlinea.sri.gob.ec/movil-servicios/api/v1.0/deudas/porIdentificacion/{$request->cedula}");

        if ($response->successful()) {

            if ($response['contribuyente']['tipoIdentificacion'] === 'C') {

                $padronelectoral = Padronelectoral::create($validatedPadronelectoral);

                // Crear el registro en Infopadronelectoral vinculado
                $infopadronelectoral = new Infopadronelectoral($validatedInfopadronelectoral);
                $infopadronelectoral->padronelectoral_id = $padronelectoral->id;
                $infopadronelectoral->save();
                return response()->json(['message' => '¡Excelente! Ahora eres parte de la RC5.', 'code'=>'200']);

            }else{
                return response()->json(['message' => 'Cédula incorrecta','code'=> '422']);
            }
        } else {
            return response()->json(['message' => 'Cédula incorrecta','code'=> '422']);
        }

        
        }
        catch (\Exception $e) {
            // Manejo de excepciones

            $mensaje='ERROR AL VALIDAR LOS DATOS';
            if($e->getMessage()=='validation.unique'){
                $mensaje= 'La cedula se encuentra registrada';
            }
            return response()->json(['error' => 'Error al procesar la solicitud: ' . $mensaje, 'code'=>'400']);
        }
    }



    public function eliminarRegistrosPorProvinciaYAdherenteNulo(Request $request)
{

    try {
        // Eliminar todos los registros de Padronelectoral con el provincia_id especificado y adherente nulo
        try {
            $provinciaId = $request->provinciaId;
            $batchSize = 10000; // Tamaño del lote
            $totalDeleted = 0;
    
            do {
                $deletedRows = Padronelectoral::where('cantone_id', $provinciaId)
                                              ->whereNull('adherente')
                                              ->limit($batchSize)
                                              ->delete();
                $totalDeleted += $deletedRows;
            } while ($deletedRows > 0);
    
            return response()->json(['message' => "Se eliminaron $totalDeleted registros del canron con ID {$provinciaId} y adherente nulo.", 'code' => 200]);
        } catch (\Exception $e) {
            // Manejo de excepciones
            return response()->json(['error' => 'Error al procesar la solicitud: ' . $e->getMessage(), 'code' => 500]);
        }
        // Verificar si se eliminaron registros
        if ($deletedRows > 0) {
            return response()->json(['message' => "Se eliminaron $deletedRows registros de la provincia con ID $request->provinciaId y adherente nulo.", 'code' => 200]);
        } else {
            return response()->json(['message' => "No se encontraron registros con provincia_id $request->provinciaId y adherente nulo.", 'code' => 404]);
        }
    } catch (\Exception $e) {
        // Manejo de excepciones
        return response()->json(['error' => 'Error al procesar la solicitud: ' . $e->getMessage(), 'code' => 500]);
    }
}


    public function obtenerCedulasDuplicadasConAdherenteNulo()
    {
        // Paso 1: Identificar las cédulas duplicadas
        $registrosDuplicados = Padronelectoral::select('id','cedula', 'adherente', 'nom_padron')
        ->groupBy('id','cedula', 'adherente', 'nom_padron')
        ->havingRaw('COUNT(*) > 1')
        ->get(['cedula', 'adherente', 'nom_padron']);

        $deletedRows = Padronelectoral::whereIn('id', $registrosDuplicados)->delete();
        

        return response()->json($deletedRows);
    }


}
