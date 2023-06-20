<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('procedimentos', function (Blueprint $table) {
            $table->id('id_procedimento');
            $table->string('id_profissional_de_saude');
            $table->string('procedimento');
            $table->string('custo_operacional');
            $table->string('honorario');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('procedimentos');
    }
};
