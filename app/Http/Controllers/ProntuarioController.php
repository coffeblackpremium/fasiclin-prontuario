<?php

namespace App\Http\Controllers;

use App\Models\Prontuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ProntuarioController extends Controller
{
    /**
     * Retorna a página principal do prontuario.
     * @param Prontuario $prontuario
     * @return Response
     */
    public function index(Prontuario $prontuario)
    {
        return Inertia::render('Prontuario/Index', [
            'prontuario' => $prontuario->paginate(10)
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

    public function edit($id)
    {
        return Inertia::render('Prontuario/Edit');
    }

    public function update(Request $request, $id)
    {
        // TODO
    }

}
