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
        'endereco_id',
        'reserva_id',
        'pedido_id',
    ];

    public function endereco()
    {
        return $this->hasOne('App\Models\Endereco');
    }

    public function reservas()
    {
        return $this->hasMany('App\Models\Reserva');
    }

    public function pedidos()
    {
        return $this->hasMany('App\Models\Pedido');
    }

}
