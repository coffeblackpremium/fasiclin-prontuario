<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProntuarioController extends Controller
{
    public function index()
    {
        return Inertia::render('Prontuario/Index');
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
