<?php

namespace App\Http\Controllers;

use App\Models\Question;

class QuestionController extends Controller
{

    public function index()
    {
        $question = Question::all();

        return $question->toJson();
    }

    public function show($id)
    {
        $project = Question::with(['answers' => function ($query) {
            $query->table('user_results')->where('user_id')->where('is_completed', false);
        }])->find($id);

        return $project->toJson();
    }

    public function markAsCompleted(Project $project)
    {
        $project->is_completed = true;
        $project->update();

        return response()->json('Project updated!');
    }
}
