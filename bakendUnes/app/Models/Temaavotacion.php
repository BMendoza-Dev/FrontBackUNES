<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tema;
use App\Models\Perfil;
class Temaavotacion extends Model
{
    use HasFactory;

    public function tema(){
    	return $this->belongsTo(Tema::class);
    }

    public function perfiles(){
    	return $this->belongsToMany(Perfil::class)->withPivot('voto')->withTimesTamps();
    }
}
