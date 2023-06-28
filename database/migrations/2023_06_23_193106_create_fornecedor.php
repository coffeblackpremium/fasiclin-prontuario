<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('pron_fornecedor', function (Blueprint $table) {
            $table->id('id_fornecedor');
            $table->string('cnpj', 14);
            $table->string('nome');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pron_fornecedor');
    }
};
