<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('pron_prontuarios', function (Blueprint $table) {
            $table
                ->foreign('id_cpf')
                ->references('cpf')
                ->on('pron_clientes');
            $table
                ->foreign('id_especialidade')
                ->references('id_especialidade')
                ->on('pron_especialidades');
            $table
                ->foreign('id_procedimentos')
                ->references('id_procedimentos')
                ->on('pron_procedimentos');
            $table
                ->foreign('id_profissional')
                ->references('id_profissional')
                ->on('pron_profissionais');
            $table
                ->foreign('id_fornecedor')
                ->references('id_fornecedor')
                ->on('pron_fornecedor');
            $table->dateTime('data_hora')
                ->unique()
                ->useCurrent();
            $table->text('descricao');
            $table->string('link');
            $table->boolean('autenticado');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pron_prontuarios');
    }
};
