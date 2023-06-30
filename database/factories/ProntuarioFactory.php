<?php

namespace Database\Factories;

use App\Models\Cliente;
use App\Models\Especialidade;
use App\Models\Procedimento;
use App\Models\Profissional;
use App\Models\Prontuario;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProntuarioFactory extends Factory
{
    protected $model = Prontuario::class;

    public function definition(): array
    {
        return [
            'id_cpf' => Cliente::query()->first()->cpf_cliente,
            'id_especialidade' => Especialidade::query()->inRandomOrder()->first()->id ?? 8,
            'id_procedimentos' => Procedimento::query()->inRandomOrder()->first()->id ?? 2,
            'id_profissional_de_saude' => Profissional::query()->inRandomOrder()->first()->id ?? 1,
            'data_hora' => fake()->unique()->date(),
            'descricao' => fake()->paragraph(2),
            'link' => fake()->unique()->url(),
            'autenticado' => fake()->boolean(50),
        ];
    }
}
