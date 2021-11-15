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
        'produto',
        'qtdProduto',
        'dataCompra',
        'apartamento_id'
    ];

    public function apartamento()
    {
        return $this->hasOne('App\Models\Apartamento');
    }
}
