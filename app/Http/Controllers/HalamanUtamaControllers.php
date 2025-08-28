<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HalamanUtamaControllers extends Controller
{
    public function index()
    {
        return Inertia::render('HalamanUtama/Index', []);
    }

    public function profile()
    {
        return Inertia::render('HalamanUtama/Profile', []);
    }

    public function logout()
    {
        return Inertia::render('HalamanUtama/Logout', []);
    }

    public function sales1()
    {
        return Inertia::render('HalamanUtama/Sales/Sales1', []);
    }

    public function sales2()
    {
        return Inertia::render('HalamanUtama/Sales/Sales2', []);
    }

    public function sales3()
    {
        return Inertia::render('HalamanUtama/Sales/Sales3', []);
    }

    public function scm1()
    {
        return Inertia::render('HalamanUtama/Scm/Scm1', []);
    }

    public function scm2()
    {
        return Inertia::render('HalamanUtama/Scm/Scm2', []);
    }

    public function scm3()
    {
        return Inertia::render('HalamanUtama/Scm/Scm3', []);
    }


}
