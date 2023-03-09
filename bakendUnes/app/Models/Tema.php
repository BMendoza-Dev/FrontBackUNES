<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Sesion;
use App\Models\Temaavotacion;
class Tema extends Model
{
    use HasFactory;
    protected $fillable = [
        'description', 'initialDate'
    ];

    public function sesion(){
    	return $this->belongsTo(Sesion::class);
    }
    public function temasaavotacion(){
        return $this->hasMany(Temaavotacion::class);
     }

}
