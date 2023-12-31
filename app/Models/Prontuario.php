<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Prontuario extends Model
{
    use HasFactory;

    protected $table = 'pron_prontuarios';
    protected $guarded = [];

    const CREATED_AT = null;
    const UPDATED_AT = null;
}
