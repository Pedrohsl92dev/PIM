<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FecharConta extends Model
{
    protected $fillable = [
        'id',
        'valor',
        'dataPagamento',
        'formaDePagamento',
        'hospede_id'
    ];

    public function hospede()
    {
        return $this->hasOne('App\Models\Hospede');
    }
}
