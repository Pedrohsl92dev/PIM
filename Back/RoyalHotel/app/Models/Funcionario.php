<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'cpf',
        'endereco',
        'cidade',
        'estado',
        'categoria',
        'cep',
        'complemento',
        'telefone',
        'celular',
        'email',
        'cargo',
        'usuario',
        'senha',
    ];
}
