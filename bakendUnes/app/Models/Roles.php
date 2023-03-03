<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Permisos;
class Roles extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre', 'slug', 'descripcion','fullacceso',
    ];

    public function users(){
    	return $this->belongsToMany(User::class)->withTimesTamps();
    }
    public function permisos(){
        return $this->belongsToMany(Permisos::class)->withTimesTamps();
    }
}
