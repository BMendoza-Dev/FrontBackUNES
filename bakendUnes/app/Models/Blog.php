<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Perfil;
use App\Models\User;
use App\Models\Editorial;
use App\Models\Categorie;
use App\Models\Visitante;
use App\Models\Imagen;
use App\Models\Pdf;
use App\Models\Nota;

use Illuminate\Database\Eloquent\Relations\MorphOne;
class Blog extends Model
{
    use HasFactory, SoftDeletes;


    public function perfil(){
    	return $this->belongsTo(Perfil::class);
    }

    public function user(){
    	return $this->belongsTo(User::class);
    }
    public function editoriale(){
        return $this->belongsToMany(Editorial::class)->withTimesTamps();
    }
    public function categoria(){
    	return $this->belongsTo(Categorie::class,'categorie_id');
    }

    public function visitantes(){
        return $this->belongsToMany(Visitante::class)->withPivot('visitas')->withTimesTamps();
    }

    public function nota(){
    	return $this->hasMany(Nota::class);
    }
    
    public function image(){
    	return $this->MorphOne('App\Models\Imagen','imageable');
    }
    public function pdf(){
    	return $this->morphMany('App\Models\Pdf','pdfeable');
    }
}
