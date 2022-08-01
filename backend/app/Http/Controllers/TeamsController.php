<?php

namespace App\Http\Controllers;

use App\Models\Teams;
use Illuminate\Http\Request;

class TeamsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teams = Teams::all();
        return response()->json($teams);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            Teams::create($request->all());
            return response()->json(['message' => 'Turma cadastrada com sucesso'], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Teams  $teams
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $teams = Teams::findOrFail($id);
            return response()->json($teams);
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Teams  $teams
     * @return \Illuminate\Http\Response
     */
    public function edit(Teams $teams)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Teams  $teams
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            $team = Teams::findOrFail($request->id);
            $team->update($request->all());
            return response()->json(['message' => 'Turma alterada com sucesso']);
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
        return response()->json($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Teams  $teams
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        try {
            Teams::destroy($id);
            //$team->destroy();
            return response()->json(['message' => 'Excluido com sucesso '], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Error: '.$th->getMessage()] , 500);
        }
    }
}
