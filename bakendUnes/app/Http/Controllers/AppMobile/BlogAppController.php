<?php

namespace App\Http\Controllers\AppMobile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Imagen;
use App\Models\User;
use App\Models\Categorie;
use App\Models\Blog;
use App\Models\Nota;
use App\Events\ChatEvent;
use App\Models\Pdf;
use App\Models\Visitante;
use App\Events\DirectMessageEvent;
use App\Models\Editorial;
use App\Events\NotifyEventBlog;
use App\Notifications\NotifyBlogsPorAprobar;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Carbon\Carbon;

class BlogAppController extends Controller
{
    public function ListarBlogUltimaNoticiaApp(Request $request){


        $categoryId=$request->cate_id;
        $blogs = Blog::with('perfil', 'image','categoria')
            ->where('aprobado',true)->where('ultimanoticia',true)->when($categoryId, function($query, $categoryId) {
        return $query->whereHas('categoria', function($query) use ($categoryId) {
            $query->where('id', $categoryId);
        });
    }, function($query) {
        return $query;
    })->orderByDesc('created_at')
    ->get()->map(function($blog) {
                return [
                    'id' => $blog->id,
                    'blogtitulo' => $blog->blogtitulo,
                    'blogdescripcion' => $blog->blogdescripcion,
                    'blogcontenido' => $blog->blogcontenido,
                    'masleido' => $blog->masleido,
                    'ultimanoticia' => $blog->ultimanoticia,
                    'aprobado' => $blog->aprobado,
                    'editoriale_id' => $blog->editoriale_id,
                    'categorie_id' => $blog->categorie_id,
                    'categorianame' => $blog->categoria->categorianame,
                    'perfil_id' => $blog->perfil_id,
                    'users_id' => $blog->users_id,
                    'created_at' => $blog->created_at,
                    'updated_at' => $blog->updated_at,
                    'perfil' => $blog->perfil,
                    'imagen' => $blog->image->imagen
                ];
            });
            if($blogs->isEmpty()){
                return  response()->json(['error'=>'404']);
            }

        return  response()->json($blogs);
    }


    public function ListarEditorialApp(Request $request){

        $editoriales = Editorial::with(['blogs' => function ($query) {
            $query->orderBy('blog_editorial.position', 'asc');
        }, 'blogs.categoria'])->get();

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
                    'categorianame' => $blog->categoria->categorianame,
                    'perfil'=> $blog->perfil,
                    'imagen' => $blog->image->imagen

                ];
            })
        ];
    });

        return response()->json($editorialesConBlogs);
      }


      public function ListarPdfBlogApp(Request $request){
        $blogid = $request->blog_id;
        $Pdfs = Blog::with('pdf')->find($blogid)->pdf->map(function($pdf){
        return [
        'id' => $pdf->id,
        'name' => $pdf->name,
        'pdf' => $pdf->pdf
        ];
        });
        return response()->json($Pdfs);
        }

        public function ObtenerBlogApp(Request $request) {
            $blogid = $request->blog_id;
            $blog = Blog::with('perfil', 'image','categoria')->find($blogid);
            $blogs = collect([$blog])->map(function($blog) {
                return [
                    'id' => $blog->id,
                    'blogtitulo' => $blog->blogtitulo,
                    'blogdescripcion' => $blog->blogdescripcion,
                    'blogcontenido' => $blog->blogcontenido,
                    'masleido' => $blog->masleido,
                    'ultimanoticia' => $blog->ultimanoticia,
                    'aprobado' => $blog->aprobado,
                    'editoriale_id' => $blog->editoriale_id,
                    'categorie_id' => $blog->categorie_id,
                    'categorianame' => $blog->categoria->categorianame,
                    'perfil_id' => $blog->perfil_id,
                    'users_id' => $blog->users_id,
                    'created_at' => $blog->created_at,
                    'updated_at' => $blog->updated_at,
                    'perfil' => $blog->perfil,
                    'imagen' => $blog->image->imagen
                ];
            });
            return response()->json( $blogs);
        }


        public function ListarBlogsPorEditorialApp(Request $request)
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
                    'categorianame' => $blog->categoria->categorianame,
                    'updated_at' => $blog->updated_at,
                    'perfil' => $blog->perfil,
                    'imagen' => $blog->image->imagen
                ];
            })
        ];
    });

    return response()->json($editorialesConBlogs);
    }

    public function ListarCategoriasPerfilBlogs (Request $request){
        
        $categorias = Categorie::select('id', 'categorianame')
        ->distinct()
        ->whereHas('blog', function ($query) use ($request) {
            $query->where('perfil_id', $request->perfil_id);
        })
        ->orderBy('categorianame')
        ->get();
if ($categorias->isEmpty()) {
return response()->json(['error' => '404']);
}
return response()->json($categorias);
     }


    public function ListarBlogsPorPerfilCategoria (Request $request){
        $categoryId=$request->cate_id;
        $blogs = Blog::where('perfil_id',$request->perfil_id)->with('perfil', 'image','categoria')->when($categoryId, function($query, $categoryId) {
        return $query->whereHas('categoria', function($query) use ($categoryId) {
            $query->where('id', $categoryId);
        });
    }, function($query) {
        return $query;
    })->orderByDesc('updated_at')
    ->get()->map(function($blog) {
                return [
                    'id' => $blog->id,
                    'blogtitulo' => $blog->blogtitulo,
                    'blogdescripcion' => $blog->blogdescripcion,
                    'blogcontenido' => $blog->blogcontenido,
                    'masleido' => $blog->masleido,
                    'ultimanoticia' => $blog->ultimanoticia,
                    'aprobado' => $blog->aprobado,
                    'editoriale_id' => $blog->editoriale_id,
                    'categorie_id' => $blog->categorie_id,
                    'categorianame' => $blog->categoria->categorianame,
                    'perfil_id' => $blog->perfil_id,
                    'users_id' => $blog->users_id,
                    'created_at' => $blog->created_at,
                    'updated_at' => $blog->updated_at,
                    'perfil' => $blog->perfil,
                    'imagen' => $blog->image->imagen
                ];
            });
            if($blogs->isEmpty()){
                return  response()->json(['error'=>'404']);
            }

        return  response()->json($blogs);
           
     }

     
     public function ListarBlogsAgenda (Request $request){

        $blogs = Blog::with('perfil', 'image', 'categoria')
        ->whereHas('categoria', function ($query) {
            $query->where('categorianame', 'Agenda');
        })
        ->orderBy('created_at', 'desc')
        ->get();

    return response()->json($blogs);
    }

    public function AddVisitaVisitanteBlog (Request $request){

        
        $identificador = Auth::user()->identificador;
    if (Visitante::where('identificador', $identificador)->exists() ) {

        if(Visitante::where('identificador', $identificador)
        ->whereHas('blogs', function ($query) use ($request) {
            $query->where('blog_id', $request->blogs_id);
        })
        ->exists()){

            $visitante = Visitante::with('blogs')->where('identificador', $identificador)->first();
            $visitante->blogs()->syncWithoutDetaching([$request->blogs_id]);
            $pivotData = $visitante->blogs->find($request->blogs_id)->pivot;
            $pivotData->visitas = $pivotData->visitas + 1;
            $pivotData->save();
            return response()->json(['message' => 'Visita registrada', 'visitas' => $pivotData->visitas], 200);

        }else{
            $visitante = Visitante::with('blogs')->where('identificador', $identificador)->first();
            
            $visitante->blogs()->attach($request->blogs_id, ['visitas' => 1]);
            return response()->json(['message' => 'Visita registrada', 'visitas' => 1], 200);
        }
       

        
    } else {
        $visitante = Visitante::create([
            'identificador' => $identificador
        ]);

        $visitante->blogs()->attach($request->blogs_id, ['visitas' => 1]);

        return response()->json(['message' => 'Visita registrada', 'visitas' => 1], 200);
    }

    return response()->json(['message' => 'Error al procesar la solicitud'], 400);
    }

    public function obtenerBlogsByVisitorsCount()
{
    $blogs = Blog::with(['visitantes' => function ($query) {
        $query->withPivot('visitas');
    }])
    ->withCount('visitantes')
    ->orderBy('visitantes_count', 'desc')
    ->get()
    ->map(function ($blog) {
        $numvisitantes = $blog->visitantes_count;
        $visitas = 0;

        $blog->visitantes->map(function ($visitante) use (&$visitas) {
            $visitas += $visitante->pivot->visitas;
        });

        $blogData = $blog->toArray();
        $blogData['visitas'] = $visitas;
        $blogData['visitantes'] = $numvisitantes;

        return $blogData;
    });

    return response()->json($blogs, 200);
}



}
