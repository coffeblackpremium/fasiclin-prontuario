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
            ->distinct()
            ->paginate(10);

        return Inertia::render('Prontuario/Index', [
            'prontuarios' => $prontuario,
        ]);
    }

    public function store(Request $request)
    {
        DB::table('pron_prontuarios')->insert([
            ...$request->all(),
            'data_abertura' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        return redirect()->to(route('prontuario.index'))->with('success', 'Prontuario criado com sucesso!');
    }

    public function show(string $cpfCliente, string $dataAbertura): Response
    {
        return Inertia::render('Prontuario/Show');
    }

    /**
     * Retorna a página de edição do prontuário.
     *
     * @param $cpfCliente
     * @param $dataAbertura
     * @return Response
     */
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
                'pron_profissional.nome as nome_profissional');

        $prontuarios = DB::table('pron_prontuarios')
            ->join('ag_cliente', 'ag_cliente.cpf_cliente', '=', 'pron_prontuarios.cpf_cliente')
            ->join('pron_procedimentos', 'pron_procedimentos.id_procedimento', '=', 'pron_prontuarios.id_procedimentos')
            ->join('pron_especialidade', 'pron_especialidade.id_especialidade', '=', 'pron_prontuarios.id_especialidade')
            ->join('pron_profissional', 'pron_profissional.id_profissional_de_saude', '=', 'pron_prontuarios.id_profissional_de_saude')
            ->orderBy('pron_prontuarios.data_abertura', 'desc')
            ->select(
                'pron_prontuarios.*',
                'ag_cliente.nome_cliente',
                'pron_procedimentos.procedimento',
                'pron_especialidade.nome as nome_especialidade',
                'pron_profissional.nome as nome_profissional')
            ->paginate(3);


        return Inertia::render('Prontuario/Edit', [
            'prontuario' => $prontuario->first(),
            'prontuarios' => $prontuarios
        ]);
    }

    public function update(Request $request, $id)
    {
        // TODO
    }

}
