<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CadastroApartamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'numero',
        'andar',
        'tamanho',
        'categoria',
        'imagem'
    ];
}
