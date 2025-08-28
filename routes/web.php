<?php

use App\Http\Controllers\HalamanUtamaControllers;
use Illuminate\Support\Facades\Route;

Route::get('/', [HalamanUtamaControllers::class, 'index']);


Route::get('/sales1', [HalamanUtamaControllers::class, 'sales1']);
Route::get('/sales2', [HalamanUtamaControllers::class, 'sales2']);
Route::get('/sales3', [HalamanUtamaControllers::class, 'sales3']);


Route::get('/scm1', [HalamanUtamaControllers::class, 'scm1']);
Route::get('/scm2', [HalamanUtamaControllers::class, 'scm2']);
Route::get('/scm3', [HalamanUtamaControllers::class, 'scm3']);

Route::get('/profile', [HalamanUtamaControllers::class, 'profile']);
Route::get('/logout', [HalamanUtamaControllers::class, 'logout']);
