<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'primeiroNome',
        'sobrenome',
        'cpf',
        'email',
        'usuario',
        'senha',
        'confirmeSenha',
        'imagem',
        'categoria',
    ];
}
