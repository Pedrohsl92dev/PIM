<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FaleConosco extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'assunto',
        'email',
        'menssagem',
    ];
}
