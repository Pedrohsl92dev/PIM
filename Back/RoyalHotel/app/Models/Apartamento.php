<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apartamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'numero',
        'andar',
        'tamanho',
        'categoria',
        'imagem',
    ];

    public function reservas()
    {
        return $this->hasMany('App\Models\Reserva');
    }
}
