<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Imagen;
use App\Models\User;
use App\Models\Categorie;
use App\Models\Blog;
use Illuminate\Support\Facades\Gate;
class BlogsController extends Controller
{
    public function index(){
    
    }

    public function CrearBlog(Request $request){
        
        if($request->blog_id==null){
            $Categoria = Categorie::findOrFail($request->categorie_id);
        $Perfil = Perfil::findOrFail($request->perfils_id);

        $blog = new Blog();
        $blog->blogtitulo= $request->blogtitulo;
        $blog->blogdescripcion=$request->blogdescripcion;
        $blog->blogcontenido=$request->blogcontenido;
        $blog->masleido=false;
        $blog->ultimanoticia=$request->ultimanoticia;
        $blog->aprobado=false;
        $blog->categorie_id=$Categoria->id;
        $blog->perfils_id=$Perfil->id;
        $blog->users_id=auth()->user()->id;
        $blog->save();
        $urlimagenes2['imagen']=['imagen' => base64_decode($request->imagen) ];
        $blog->image()->createMany($urlimagenes2);
        return  response()->json('200');
        }else{
        $Categoria = Categorie::findOrFail($request->categorie_id);
        $Perfil = Perfil::findOrFail($request->perfils_id);
        $blog= Blog::findOrFail($request->blog_id);
        $blog->blogtitulo= $request->blogtitulo;
        $blog->blogdescripcion=$request->blogdescripcion;
        $blog->blogcontenido=$request->blogcontenido;
        $blog->masleido=false;
        $blog->ultimanoticia=$request->ultimanoticia;
        $blog->aprobado=false;
        $blog->categorie_id=$Categoria->id;
        $blog->perfils_id=$Perfil->id;
        $blog->users_id=auth()->user()->id;
        $blog->update();
            if($request->imagen!=null){
            $urlimagenes2=[];
            $urlimagenes2['imagen']=['imagen' =>  base64_decode($request->imagen)];
             
                $blog->load(['image'=> function ($query) use ($urlimagenes2) {
                        $query->update( $urlimagenes2['imagen']);
                }]);
            }
        }
        

        return  response()->json('200');
    }



}
