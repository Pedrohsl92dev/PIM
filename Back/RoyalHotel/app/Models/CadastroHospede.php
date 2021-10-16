<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CadastroHospede extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'primeiroNome',
        'sobrenome',
        'email',
        'usuario',
        'senha',
        'categoria'
    ];
}
