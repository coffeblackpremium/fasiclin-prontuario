<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Prontuario;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProntuarioController extends Controller
{
    /**
     * Retorna a página principal do prontuario.
     *
     * @return Response
     */
    public function index(): Response
    {
        $prontuario = DB::table('pron_prontuarios')
            ->join('ag_cliente', 'ag_cliente.cpf_cliente', '=', 'pron_prontuarios.cpf_cliente')
            ->join('pron_procedimentos', 'pron_procedimentos.id_procedimento', '=', 'pron_prontuarios.id_procedimentos')
            ->join('pron_especialidade', 'pron_especialidade.id_especialidade', '=', 'pron_prontuarios.id_especialidade')
            ->orderBy('pron_prontuarios.data_abertura', 'desc')
            ->select('pron_prontuarios.*', 'ag_cliente.nome_cliente', 'pron_procedimentos.procedimento', 'pron_especialidade.nome')
            ->get();

        return Inertia::render('Prontuario/Index', [
            'prontuarios' => $prontuario,
        ]);
    }

    public function store(Request $request)
    {
        // TODO
    }

    public function show($id)
    {
        return Inertia::render('Prontuario/Show');
    }

    public function edit($cpfCliente, $dataAbertura): Response
    {
        $data = Carbon::parse($dataAbertura)->format('Y-m-d H:i:s');

        $prontuario = DB::table('pron_prontuarios')
            ->where('pron_prontuarios.cpf_cliente', $cpfCliente)
            ->where('pron_prontuarios.data_abertura', $data)
            ->join('ag_cliente', 'ag_cliente.cpf_cliente', '=', 'pron_prontuarios.cpf_cliente')
            ->join('pron_procedimentos', 'pron_procedimentos.id_procedimento', '=', 'pron_prontuarios.id_procedimentos')
            ->join('pron_especialidade', 'pron_especialidade.id_especialidade', '=', 'pron_prontuarios.id_especialidade')
            ->join('pron_profissional', 'pron_profissional.id_profissional_de_saude', '=', 'pron_prontuarios.id_profissional_de_saude')
            ->select(
                'pron_prontuarios.*',
                'ag_cliente.nome_cliente',
                'pron_procedimentos.procedimento',
                'pron_especialidade.nome as nome_especialidade',
                'pron_profissional.nome as nome_profissional')
            ->first();

        return Inertia::render('Prontuario/Edit', [
            'prontuario' => $prontuario,
        ]);
    }

    public function update(Request $request, $id)
    {
        // TODO
    }

}
