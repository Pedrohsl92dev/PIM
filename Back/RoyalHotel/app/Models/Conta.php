<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conta extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'valor',
        'dataPagamento',
        'formaPagamento',
        'statusPagamento',
    ];

    public function reserva()
    {
        return $this->belongsTo('App\Models\Reserva');
    }
}
