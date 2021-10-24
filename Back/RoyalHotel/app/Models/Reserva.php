<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'dataEntrada',
        'dataSaida',
        'qtdPessoas',
        'statusPagamento',
        'apartamento_id'
    ];

    public function hospede()
    {
        return $this->hasMany('App\Models\Hospede');
    }
}
