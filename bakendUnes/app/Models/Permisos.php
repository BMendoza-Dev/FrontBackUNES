<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Roles;
class Permisos extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre', 'slug', 'descripcion',
    ];
    public function roles(){
        return $this->belongsToMany(Roles::class)->withTimesTamps();
    }
}
