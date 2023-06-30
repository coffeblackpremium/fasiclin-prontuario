<?php

namespace Database\Factories;

use App\Models\Especialidade;
use Illuminate\Database\Eloquent\Factories\Factory;

class EspecialidadeFactory extends Factory
{
    protected $model = Especialidade::class;

    public function definition(): array
    {
        return [
            'id_especialidade' => fake()->unique()->numberBetween(1, 100),
            'nome' => fn() => ['Cirurgião', 'Ortopédica', 'Odontólogo', 'Oftalmólogo'][fake()->numberBetween(0, 3)],
        ];
    }
}
