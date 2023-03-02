<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Blog;
class Categorie extends Model
{
    use HasFactory;
    protected $fillable = [
      'categorianame'
    ];
    public $timestamps = false;
    public function blog(){
        return $this->HasMany(Blog::class);
      }
}
