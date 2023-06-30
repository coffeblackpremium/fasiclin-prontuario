<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profissional extends Model
{
    use HasFactory;
    //Seta a model para o nome da tabela.
    protected $table = 'pron_profissional';

    const UPDATED_AT = null;
    const CREATED_AT = null;
    protected $guarded = [];
}
