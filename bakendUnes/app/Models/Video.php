<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Perfil;
class Video extends Model
{
    use HasFactory, SoftDeletes;
    public function perfil(){
    	return $this->belongsTo(Perfil::class);
    }
}
