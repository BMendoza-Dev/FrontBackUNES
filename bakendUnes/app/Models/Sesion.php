<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Agendadeactividades;
use App\Models\Tema;
class Sesion extends Model
{
    use HasFactory;
    protected $fillable = [
        'sesion', 'initialDate','agendaStatus'
    ];

    public function temas(){
        return $this->hasMany(Tema::class);
     }
}
