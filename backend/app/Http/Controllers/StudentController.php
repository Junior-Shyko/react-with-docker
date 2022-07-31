<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\FunctionGenerate;
use Carbon\Carbon;
use Symfony\Component\VarDumper\Cloner\Stub;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = Student::all();
        //MODIFICANDO A DATA PARA FRONT    
        foreach ($students as $student) {
            if(isset($student->birthday)){
                $student->birthday = Carbon::parse($student->birthday)->format('d/m/Y');
            }
        }
        return response()->json($students);
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
        $birthday = FunctionGenerate::DataBRtoMySQL($request['birth']);
        $request['birth'] = $birthday;
        try {
            Student::create($request->all());
                return response()->json([
                    'message' => 'Aluno cadastrado com sucesso',
                    'type' => 'success'
                ], 200);
                
        } catch (\Exception $th) {
            return response()->json([
                'message' => 'Error: '.$th->getMessage(),
                'type' => 'error'
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $studenty = Student::findOrFail($id);
            $studenty->delete();
            return response()->json([
                'message' => 'Aluno Excluído com sucesso',
                'type' => 'success'
            ], 200);
        } catch (\Exception $th) {
            return response()->json([
                'message' => 'Erro: '.$th->getMessage(),
                'type' => 'error'
            ], 400);
        }   
    }
}
