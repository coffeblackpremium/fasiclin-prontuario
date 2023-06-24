<?php

use App\Models\Fornecedor;
use App\Models\Procedimentos;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('procedimento_fornecedor', function (Blueprint $table) {
            $table->foreignIdFor(Procedimentos::class)->constrained();
            $table->foreignIdFor(Fornecedor::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('procedimento_fornecedor');
    }
};
