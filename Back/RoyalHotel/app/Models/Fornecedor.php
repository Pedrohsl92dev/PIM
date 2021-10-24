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
        'endereco',
        'cidade',
        'estado',
        'ie',
        'endereco_id',
        'produto_id'
    ];

    public function produto()
    {
        return $this->hasMany('App\Models\Produto');
    }


    public function endereco()
    {
        return $this->hasOne('App\Models\Endereco');
    }
}
