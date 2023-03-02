<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Blog;
class Visitante extends Model
{
    use HasFactory;

    public function comisiones(){
        return $this->belongsToMany(Blog::class)->withPivot('visitas')->withTimesTamps();;
      }
}
