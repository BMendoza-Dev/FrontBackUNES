<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Blog;
use Illuminate\Database\Eloquent\SoftDeletes;
class Categorie extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
      'categorianame'
    ];
    public $timestamps = false;
    public function blog(){
        return $this->HasMany(Blog::class);
      }
}
