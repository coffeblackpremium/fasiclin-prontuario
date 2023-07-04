<?php

namespace Database\Factories;

use App\Models\Procedimento;
use App\Models\Profissional;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProcedimentoFactory extends Factory
{
    protected $model = Procedimento::class;

    public function definition(): array
    {
        return [
            'id_procedimento' => fake()->unique()->numberBetween(1,9),
            'id_profissional_de_saude' => Profissional::query()->orderByDesc('id_profissional_de_saude')->first()->id ?? 1,
            'procedimento' => fake()->sentence(3),
            'custo_operacional' => fake()->randomFloat('2', 0, 100),
            'honorarios' => fake()->randomFloat('2', 0, 100)
        ];
    }
}
