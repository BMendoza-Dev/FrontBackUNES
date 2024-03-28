<?php

namespace App\Models\Padron;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parroquias extends Model
{
    use HasFactory;
    protected $fillable = ['parroquia','est','distrito_id','cantone_id','circunscripcione_id'];
}
