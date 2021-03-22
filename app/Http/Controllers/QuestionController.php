<?php

namespace App\Http\Controllers;

use App\Models\QuestionAnswer;
use App\Models\Questions;
use App\Models\QuestionsAnswer;
use App\Models\UserResults;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Client\Request;
use Monolog\Logger;

class QuestionController extends Controller
{

    public function index()
    {
        $questions = Questions::has('questionAnswer', '>=', 1)->get();

        return $questions->toJson();
    }

    public function show($id)
    {
       $questionsWithAnswers = Questions::where('id',$id)->with('questionAnswer')->get();

        return $questionsWithAnswers->toJson();
    }

    public function handleMarkUserChoice($questionID, $answerID)
    {

        return QuestionAnswer::is_correct($questionID, $answerID);

    }
}
