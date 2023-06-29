<?php

namespace Database\Factories;

use App\Models\Fornecedor;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Provider\pt_BR\Person;

class FornecedorFactory extends Factory
{
    protected $model = Fornecedor::class;

    public function definition(): array
    {
        return [
            'id_fornecedor' => fake()->unique()->numberBetween(1,50),
            'cnpj' => fake()->cnpj(false),
            'nome' => fake()->company(),
            'descricao' => fake()->paragraph(2),
        ];
    }
}
