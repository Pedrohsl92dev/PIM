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
        'valorDiaria',
        'valorTotal',
        'hospede_id',
        'categoria',
        'apartamento_id',
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
