<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'quantidade',
        'dataValidade',
        'marca',
        'valor',
        'fornecedor_id'
    ];

    public function fornecedor()
    {
        return $this->hasMany('App\Models\Fornecedor');
    }
}
