<?php

namespace App\Models;

use http\Client\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\Console\Question\Question;

class QuestionAnswer extends Model
{
    use HasFactory;

    protected $fillable = ['question_id', 'answer_id', 'correct'];



    public static function is_correct($questionID, $answerID)
    {

        $questionsWithAnswers = QuestionAnswer::where('questions_id', $questionID)->where('correct', '=', '1')->first();
        if($questionsWithAnswers->answer_id == $answerID)
        {
            return 'green';
        }

        return 'red';
    }


    public function answers()
    {
        return $this->belongsTo(Question::class);

    }
}
