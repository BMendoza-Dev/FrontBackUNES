<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Blog;
use App\Models\User;

class Nota extends Model
{
    use HasFactory;
    protected $fillable = [
        'description','titulo','blog_id','user_id'
    ];

    public function user(){
    	return $this->belongsTo(User::class);
    }

    public function blog(){
    	return $this->belongsTo(Blog::class);
    }

    
}
