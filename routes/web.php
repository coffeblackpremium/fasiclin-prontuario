<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProntuarioController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('prontuario', ProntuarioController::class)->only('index');
Route::get('prontuario/{cpfCliente}/{dataAbertura}/edit', [ProntuarioController::class, 'edit'])->name('prontuario.edit');
Route::post('prontuario/{cpfCliente}/{dataAbertura}/store', [ProntuarioController::class, 'store'])->name('prontuario.store');
Route::get('prontuario/{cpfCliente}/{dataAbertura}/show', [ProntuarioController::class, 'show'])->name('prontuario.show');

require __DIR__.'/auth.php';
