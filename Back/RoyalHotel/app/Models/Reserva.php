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
        'categoriaApartamento',
        'valorDiaria',
        'valorTotal',
        'hospede_id',
        'apartamento_id'
    ];

    public function hospede()
    {
        return $this->hasOne('App\Models\Hospede');
    }

    public function apartamentos()
    {
        return $this->hasMany('App\Models\Apartamento');
    }
}
