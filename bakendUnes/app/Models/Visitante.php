<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Blog;
class Visitante extends Model
{
    use HasFactory;
    protected $fillable = [
      'identificador'
    ];
    
    public function blogs(){
        return $this->belongsToMany(Blog::class)->withPivot('visitas')->withTimesTamps();;
      }
}
