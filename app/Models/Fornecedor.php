<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    use HasFactory;
    //Seta a tabela na model.
    protected $table = 'pron_fornecedor';
    protected $guarded = [];
}
