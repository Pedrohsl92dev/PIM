<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'razaoSocial',
        'cnpj',
        'ie',
        'cidade',
        'estado',
        'cep',
        'endereco',
        'complemento',
    ];
}
