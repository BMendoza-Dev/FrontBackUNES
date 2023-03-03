<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Perfil;
use App\Models\User;
use App\Models\Editoriale;
use App\Models\Categorie;
use App\Models\Visitante;
use App\Models\Imagen;

class Blog extends Model
{
    use HasFactory;

    public function perfil(){
    	return $this->belongsTo(Perfil::class);
    }

    public function user(){
    	return $this->belongsTo(User::class);
    }
    public function editoriale(){
    	return $this->belongsTo(Editoriale::class);
    }
    public function categoria(){
    	return $this->belongsTo(Categorie::class,'categorie_id');
    }

    public function visitantes(){
        return $this->belongsToMany(Visitante::class)->withPivot('visitas')->withTimesTamps();
     }
     public function image(){
    	return $this->morphMany('App\Models\Imagen','imageable');
    }
}
