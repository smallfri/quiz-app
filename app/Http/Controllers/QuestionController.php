<?php

namespace App\Http\Controllers;

use App\Models\QuestionAnswer;
use App\Models\Questions;
use App\Models\QuestionsAnswer;
use App\Models\UserResults;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Client\Request;
use Monolog\Logger;

/**
 * Class QuestionController
 * @package App\Http\Controllers
 */
class QuestionController extends Controller
{


    /**
     * @return mixed
     *
     * Gets all questions with a correct answer
     */
    public function index()
    {
        $questions = Questions::has('questionAnswer', '>=', 1)->get();

        return $questions->toJson();
    }

    /**
     * @param $id
     * @return mixed
     *
     * Gets all Questions with their possible answers, correct and incorrect
     */
    public function show($id)
    {
       $questionsWithAnswers = Questions::where('id',$id)->with('questionAnswer')->get();

        return $questionsWithAnswers->toJson();
    }

    /**
     * @param $questionID
     * @param $answerID
     * @return string
     *
     * Marks the div red or green depending on if the answer chosen is correct.
     */
    public function handleMarkUserChoice($questionID, $answerID)
    {

        return QuestionAnswer::is_correct($questionID, $answerID);

    }
}
