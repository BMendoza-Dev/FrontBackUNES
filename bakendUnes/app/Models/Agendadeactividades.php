<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Sesion;
class Agendadeactividades extends Model
{
    use HasFactory;

    protected $fillable = [
        'description', 'sesion', 'date'
    ];
    public function agendadeactividades(){
        return $this->belongsToMany(Agendadeactividades::class)->withTimesTamps();
    }
}
