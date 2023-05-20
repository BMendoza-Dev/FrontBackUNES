<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Editorial;
use App\Models\MobileUser;
use App\Events\EventNotifyUsersApp;
use App\Notifications\NotifyUsersApp;
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
    
    self::send_notify_AppUser( $editorial, 'Editorial');
    MobileUser::all()->each(function(MobileUser $user) use ($editorial) {
        $notify=$user->notifications->map(function($notify) {
            $created_at = Carbon::parse($notify->created_at);
            return [
                'NotifyInfo'=> $notify->data['NotifyInfo'],
                'TipeNotify'=> $notify->data['TipeNotify'],
                'leido'=> $notify->read_at,
                'id_notify'=> $notify->id,
                'time'=> $notify->created_at
            ];

        });
        event(new EventNotifyUsersApp($notify,'Editorial','0'));
    });
    return response()->json('200');
     }


     static function send_notify_AppUser($NotifyInfo,$TipeNotify){
        
        MobileUser::all()->each(function (MobileUser $user) use ($NotifyInfo, $TipeNotify) {
            $user->notify(new NotifyUsersApp($NotifyInfo, $TipeNotify));
        });
    }



     public function EditarEditorial(Request $request)
    {
    $editorial = Editorial::findOrFail($request->id);

    // Actualiza los campos del modelo Editorial
    $editorial->update([
        'editorialname' => $request->editorialname,
        'editrialnum' => $request->editrialnum,
    ]);

    $datos = $request->all();
    $blogsid = json_decode($datos['blogsid'], true);

    // Elimina las relaciones existentes y sincroniza las nuevas
    $editorial->blogs()->detach();
    foreach ($blogsid as $position => $blogid) {
        $editorial->blogs()->attach($blogid, ['position' => $position]);
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
