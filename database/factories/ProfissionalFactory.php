<?php

namespace Database\Factories;

use App\Models\Profissional;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfissionalFactory extends Factory
{
    protected $model = Profissional::class;

    public function definition(): array
    {
        return [
            'id_profissional' => fake()->unique()->numberBetween(1,9),
            'nome' => fake()->firstName(),
            'especialidade' => fake()->word,
        ];
    }
}
