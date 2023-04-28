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
       $editorial = Editorial::create([
        'editorialname' =>$titulo ,
        'editrialnum' =>$numeditnew,
    ]);
    
    $blogsid = json_decode($datos['blogsid'],true);
    
    foreach ($blogsid as $position => $blogid) {
        $editorial->blogs()->attach($blogid, ['position' => $position]);
    }
    
    return response()->json('200');
     }



     public function EditarEditorial(Request $request){
        $editorial = Editorial::findOrFail($request->id);

    // Actualiza los campos del modelo Editorial
    $editorial->update([
        'editorialname' => $request->editorialname,
        'editrialnum' => $request->editrialnum,
    ]);

    $datos = $request->all();
    $blogsid = json_decode($datos['blogsid'],true);

    // Sincroniza las relaciones de blogs con los nuevos IDs proporcionados

    
    foreach ($blogsid as $position => $blogid) {
        $editorial->blogs()->sync($blogid, ['position' => $position]);
    }

    return response()->json('Editorial actualizado con éxito');
      }

      public function ListarEditorial(Request $request){

        $editoriales = Editorial::all();
        return response()->json($editoriales);
      }


      public function ListarBlogsPorEditorial(Request $request)
    {
        $editoriales = Editorial::with(['blogs' => function ($query) {
            $query->orderBy('blog_editorial.position', 'asc');
        }, 'blogs.categoria'])->where('id', $request->id)->get();

    $editorialesConBlogs = $editoriales->map(function($editorial){
        return [ 
            'id' => $editorial->id,
            'editrialnum' => $editorial->editrialnum,
            'editorialname' => $editorial->editorialname,
            'created_at' => $editorial->created_at,
            'blogs' => $editorial->blogs->map(function($blog){
                return [
                    'id' => $blog->id,
                    'blogtitulo' => $blog->blogtitulo,
                    'blogdescripcion' => $blog->blogdescripcion,
                    'blogcontenido' => $blog->blogcontenido,
                    'created_at' => $blog->created_at,
                    'categorianame' => $blog->categoria->categorianame
                ];
            })
        ];
    });

    return response()->json($editorialesConBlogs);
    }
}
