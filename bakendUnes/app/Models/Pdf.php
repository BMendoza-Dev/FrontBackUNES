<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pdf extends Model
{
    use HasFactory;
    protected $fillable = ['id','pdf'];
    

    public function pdfeable(){
    	return $this->morphTo()->toArray();
    }

}
