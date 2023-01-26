<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuenta extends Model
{
    use HasFactory;
   
    public $timestamps = false;
    public function role(){
    	return $this->belongsTo('App\Models\Role');
    }

    public function Perfil(){
    	return $this->belongsTo('App\Models\Perfil');
    }
}
