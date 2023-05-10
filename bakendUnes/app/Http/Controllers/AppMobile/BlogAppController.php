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
use App\Events\Pdf;
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

        $editoriales = Editorial::all();
        return response()->json($editoriales->load('blogs'));
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

}
