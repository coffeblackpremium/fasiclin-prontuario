<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('pron_anmaneses', function (Blueprint $table) {
            $table->id('id_anamnese');
            $table->bigInteger('cod_anamnese');
            $table->string('descricao');
            $table->dateTime('data_anamnese')->useCurrent();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pron_anmaneses');
    }
};
