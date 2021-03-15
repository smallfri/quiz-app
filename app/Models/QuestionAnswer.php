<?php

namespace App\Models;

use http\Client\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionAnswer extends Model
{
    use HasFactory;

    protected $fillable = ['question_id', 'answer_id', 'correct'];


    public function is_correct(Request $request)
    {
        $questionsAnswers = $request;

        foreach($questionsAnswers as $question)
        {
           if($question->correct == 1)
           {
               return true;
           }
        }

        return false;
    }
}
