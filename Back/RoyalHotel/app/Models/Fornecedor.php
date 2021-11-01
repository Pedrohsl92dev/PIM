<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'razaoSocial',
        'cnpf',
        'ie',
        'cidade',
        'estado',
        'cep',
        'endereco',
        'complemento',
    ];

    public function produto()
    {
        return $this->hasMany('App\Models\Produto');
    }
}
