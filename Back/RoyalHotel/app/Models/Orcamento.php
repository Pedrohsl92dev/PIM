<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orcamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'email',
        'cidade',
        'estado',
        'telefone',
        'celular',
        'dataEntrada',
        'dataSaida',
        'qtdAdultos',
        'qtdCriancas',
        'qtdApartamentos',
        'observacao'
    ];
}
