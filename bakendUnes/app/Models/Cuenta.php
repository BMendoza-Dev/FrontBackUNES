<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Perfil;
class Cuenta extends Model
{
    public $timestamps = false;
    

    public function Perfil(){
    	return $this->belongsTo(Perfil::class);
    }
}
