<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OauthAccessToken extends Model
{
    use HasFactory;

    protected $table = 'personal_access_tokens';
    protected $primaryKey = 'id';
    protected $fillable = [
        'last_used_at','expires_at','tokenable_id'
      ];
}
