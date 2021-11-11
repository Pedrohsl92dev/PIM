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
        'apartamento_id'
    ];

    public function apartamento()
    {
        return $this->hasMany('App\Models\Apartamento');
    }
}
