<?php

namespace App\Http\Controllers;

use App\Models\Procedimento;
use Inertia\Inertia;
use Inertia\Response;

class ProcedimentosController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Procedimentos/Index', [
            'procedimentos' => Procedimento::query()->paginate(10)
        ]);
    }
}
