<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Sesion;
class Tema extends Model
{
    use HasFactory;
    protected $fillable = [
        'description', 'initialDate','agendaStatus'
    ];

    public function sesion(){
    	return $this->belongsTo(Sesion::class);
    }

}
