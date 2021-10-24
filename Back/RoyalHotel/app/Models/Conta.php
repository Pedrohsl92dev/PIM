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
        'dataPagamento',
        'formaPagamento'
    ];

    public function hospede()
    {
        return $this->belongsTo('App\Models\Hospede');
    }
}
