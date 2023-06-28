<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('pron_clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('telefone', 9);
            $table->string('cpf')->unique();
        });
    }

    public function down(): void
    {
        Schema::table('pron_cliente', function (Blueprint $table) {
            //
        });
    }
};
