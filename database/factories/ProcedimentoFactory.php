<?php

namespace Database\Factories;

use App\Models\Procedimentos;
use App\Models\Profissional;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProcedimentoFactory extends Factory
{
    protected $model = Procedimentos::class;

    public function definition(): array
    {
        return [
            'id_procedimento' => fake()->unique()->numberBetween(1,9),
            'id_profissional' => Profissional::query()->inRandomOrder()->first()->id,
            'procedimento' => fake()->sentence(),
            'custo_honorario' => fake()->randomFloat('2'),
            'honorarios' => fake()->randomFloat('2')
        ];
    }
}
