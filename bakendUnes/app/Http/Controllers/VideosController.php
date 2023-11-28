<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Perfil;
use App\Models\Video;
class VideosController extends Controller
{
    public function index(Request $request){

        $videos= Perfil::where('id',$request->id)->with('videos')->get();
        return response()->json($videos);
    }

    public function AgregarVideo(Request $request){

        $newvideo = new Video();

        $newvideo->videotitulo = $request->videotitulo;
        $newvideo->videodescripcion = $request->videodescripcion;
        $newvideo->url = $request->url;

        $newvideo->perfil_id = $request->perfil_id;
        $newvideo->save();
        return response()->json(['mensaje'=>"Video Guardado Correctamente", 'code'=>'200']);
     }

     public function EditarVideo(Request $request){

        $editvideo= Video::findOrFail($request->video_id);

        $editvideo->videotitulo = $request->videotitulo;
        $editvideo->videodescripcion = $request->videodescripcion;
        $editvideo->url = $request->url;
       // $newvideo->perfil_id = $editvideo->perfil_id;
        $editvideo->update();
        return response()->json(['mensaje'=>"Video Editado Correctamente", 'code'=>'200']);
     }

     public function EliminarVideo(Request $request){

       $video = Video::find($request->id);
       $video->delete();
       return  response()->json(['message'=>'Eliminado correctamente','response'=>'200']);

     }

}
