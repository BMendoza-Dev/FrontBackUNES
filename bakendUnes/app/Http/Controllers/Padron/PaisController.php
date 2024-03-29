<?php

namespace App\Http\Controllers\Padron;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Padron\Paises;
use App\Models\Padron\Adherentes;
use SplFileObject;
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

     public function import()
    {
        // Obtener la ruta completa del archivo CSV
        $csvFilePath = public_path('Libro1.csv');

        // Verificar si el archivo CSV existe
        if (file_exists($csvFilePath)) {
        // Abrir el archivo CSV
        $file = new SplFileObject($csvFilePath, 'r');

        // Omitir la primera línea del archivo CSV (encabezados)
        $file->fgetcsv();

        // Iterar sobre cada línea del archivo CSV
        while (!$file->eof()) {
            // Obtener los datos de la línea y procesarlos
            $data = $file->fgetcsv();

            if ($data !== false) {
                // Verificar y convertir la codificación de los datos a UTF-8 si es necesario
                foreach ($data as &$value) {
                    $value = mb_convert_encoding($value, 'UTF-8', 'auto');
                }

                // Procesar los datos de cada línea
                $id = $data[0];
                $cedula = $data[1];
                $nombres = $data[2];
                $tipo = $data[3];

                // Insertar los datos en la base de datos utilizando el modelo correspondiente
                Adherentes::create([
                    'id' => $id,
                    'cedula' => $cedula,
                    'nombres' => $nombres,
                    'tipo' => $tipo
                ]);
            }
        }

        // Cerrar el archivo CSV
        $file = null;

        // Mensaje de éxito
            return 'Datos importados correctamente';
        } else {
        // Si el archivo CSV no existe, mostrar un mensaje de error
            return 'El archivo CSV no existe';
        }
    }
}
