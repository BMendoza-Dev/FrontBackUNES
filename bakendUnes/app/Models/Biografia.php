<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Perfil;
use App\Models\Imagen;
class Biografia extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['urlfb','urltw','urlit','urlttk','perfil'];
    public function Perfil(){
    	return $this->hasOne(Perfil::class);
    }
    public function image(){
    	return $this->morphMany('App\Models\Imagen','imageable');
    }
}
