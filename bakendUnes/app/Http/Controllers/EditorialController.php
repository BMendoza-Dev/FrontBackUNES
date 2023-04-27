<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Editorial;
use App\Events\NotifyEventBlog;
use App\Notifications\NotifyBlogsPorAprobar;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Carbon\Carbon;
class EditorialController extends Controller
{
    public function CrearEditorial(Request $request){

        if (Editorial::count() > 0) {
            $ultimoeditorial= Editorial::latest()->first();
            $numeditnew=$ultimoeditorial->editrialnum+1;
            $titulo= "Editorial"." # ".$numeditnew." ".$request->editorialname;
        } else {
            $titulo= "Editorial"." # "."1"." ".$request->editorialname;
            $numeditnew=1;
           
        }

        $datos = $request->all();
        $blogsid = json_decode($datos['blogsid'],true);
       // return  response()->json($blogsid->toArray());
        Editorial::create([
            'editorialname' =>$titulo ,
            'editrialnum' =>$numeditnew,
        ])->blogs()->sync( $blogsid ); 

        return  response()->json('200');
     }


     public function EditarEditorial(Request $request){
        $editorial = Editorial::findOrFail($request->id);

    // Actualiza los campos del modelo Editorial
    $editorial->update([
        'editorialname' => $request->input('editorialname'),
        'editrialnum' => $request->input('editrialnum'),
    ]);

    $datos = $request->all();
    $blogsid = json_decode($datos['blogsid'],true);

    // Sincroniza las relaciones de blogs con los nuevos IDs proporcionados

    $editorial->blogs()->sync($blogsid);

    return response()->json('Editorial actualizado con éxito');
      }

      public function ListarEditorial(Request $request){

        $editoriales = Editorial::all();
        return response()->json($editoriales);
      }


      public function ListarBlogsPorEditorial(Request $request){
      $editorial = Editorial::find($request->id);
    //  $editorial->load('blogs');


return response()->json($editorial->load('blogs'));
 }
}
