<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'cpf',
        'categoria',
        'usuario',
        'endereco_id'
    ];

    public function endereco()
    {
        return $this->hasOne('App\Models\Endereco');
    }
}
