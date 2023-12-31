<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('pron_profissionais', function (Blueprint $table) {
            $table->id('id_profissional_de_saude');
            $table->string('nome');
            $table->string('especialidade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pron_profissionais');
    }
};
