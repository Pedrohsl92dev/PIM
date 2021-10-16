<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservaSite extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'primeiroNome',
        'sobrenome',
        'email',
        'telefone',
        'celular',
        'dataEntrada',
        'dataSaida',
        'qtdAdultos',
        'qtdCriancas',
        'qtdApartamentos',
        'cpf',
        'categoria'
    ];
}
