<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nomeProduto',
        'valor',
        'qtdProduto',
        'valorTotal',
        'hospede_id'
    ];

    public function hospede()
    {
        return $this->hasMany('App\Models\Hospede');
    }
}
