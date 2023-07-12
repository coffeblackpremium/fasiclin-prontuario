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
        $dataAbertura = Cliente::query()->inRandomOrder()->first()->data_abertura;

        return [
            'cpf_cliente' => Cliente::query()->get()->random()->cpf_cliente,
            'id_especialidade' => Especialidade::query()->inRandomOrder()->first()->id ?? 10,
            'id_procedimentos' => Procedimento::query()->inRandomOrder()->first()->id ?? 1,
            'id_profissional_de_saude' => Profissional::query()->inRandomOrder()->first()->id ?? 1,
            'data_abertura' => Cliente::query()->inRandomOrder()->first()->data_abertura === $dataAbertura ? now()->format('y-m-d H:i:s') : '2022-10-01 00:00:00',
            'descricao' => fake()->paragraph(2),
            'link' => fake()->unique()->url(),
            'autenticado' => fake()->boolean(50),
        ];
    }
}
