<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Blog;
class Editorial extends Model
{
    use HasFactory;
    protected $fillable = [
        'editorialname','editrialnum'
      ];

    public function blogs(){
        return $this->belongsToMany(Blog::class)->withTimesTamps();
     }
}
