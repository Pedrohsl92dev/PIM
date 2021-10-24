<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'cidade',
        'estado',
        'cep',
        'endereco',
        'complemento',
    ];

    public function hospede()
    {
        return $this->hasOne('App\Models\Hospede');
    }

    public function fornecedor()
    {
        return $this->hasOne('App\Models\Fornecedor');
    }

    public function funcionario()
    {
        return $this->hasOne('App\Models\Funcionario');
    }
}
