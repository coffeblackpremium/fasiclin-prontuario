<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\Prontuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ProntuarioController extends Controller
{
    /**
     * Retorna a página principal do prontuario.
     *
     * @param Prontuario $prontuario
     * @return Response
     */
    public function index(): Response
    {
        $prontuario = Prontuario::query()->paginate(10);

        return Inertia::render('Prontuario/Index', [
            'prontuario' => $prontuario
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

    public function edit($prontuario): Response
    {
        return Inertia::render('Prontuario/Edit', ['prontuario' => $prontuario]);
    }

    public function update(Request $request, $id)
    {
        // TODO
    }

}
