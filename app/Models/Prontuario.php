<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prontuario extends Model
{
    use HasFactory;

    protected $table = 'pron_prontuario';
    protected $guarded = [];

    const CREATED_AT = null;
    const UPDATED_AT = null;
}
