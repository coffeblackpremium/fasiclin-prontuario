<?php

use App\Models\Profissional;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('pron_procedimentos', function (Blueprint $table) {
            $table->bigInteger('id_procedimentos')->unsigned()->unique();
            $table->foreignIdFor(Profissional::class)->constrained('pron_procedimentos');
            $table->string('procedimento');
            $table->decimal('custo_operacional', 6,2);
            $table->decimal('honorarios', 6,2);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('procedimentos');
    }
};
