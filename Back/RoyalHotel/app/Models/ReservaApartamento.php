<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservaApartamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'tipo',
        'preco',
        'status'
    ];

    public function hospede()
    {
        return $this->hasMany('App\Models\Hospede');
    }
}
