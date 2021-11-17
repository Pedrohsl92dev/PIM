<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hospede extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'cpf',
        'email',
        'telefone',
        'celular',
        'categoria',
        'cidade',
        'estado',
        'cep',
        'endereco',
        'complemento',
    ];
}
