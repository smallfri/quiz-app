import axios from 'axios'
import React, { Component } from 'react'

class SingleQuestion extends Component {
    constructor (props) {
        super(props)
        this.state = {
            question: [],
            answers: [],
            selectedPost: {},
            bgColor: ""
        }
        // this.hancdleMarkAsCorrectAnswer = this.handleMarkAsCorrectAnswer.bind(this)
    }

    handleMarkAsCorrectAnswer (answerID) {
        // console.log('Answers:'+this.answers);
        // console.log('Props:'+this.props);
        // const { history } = this.props
        axios.post(`/api/questions/${this.state.question.id}/answer/`+answerID)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    bgColor : response.data
                })
            });
    }

    componentDidMount () {
        const questionId = this.props.match.params.id
        axios.get(`/api/questions/${questionId}`).then(response => {
            console.log(response.data);
            this.setState({
                question: response.data[0],
                answers: response.data[0]['question_answer'],
            })

        })
    }

    render () {
        const { question, answers } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>{question.question}</div>
                            <div className='card-body' style={{backgroundColor: this.state.bgColor}}
                            >

                                <ul className='list-group mt-3'>
                                    {answers.map(answer => (
                                        <li id={answer.answer_id}
                                            className='list-group-item d-flex justify-content-between align-items-center'
                                            key={answer.id}
                                        >
                                            {answer.answer}

                                            <button className='btn btn-primary btn-sm'
                                            onClick={() => {
                                                this.handleMarkAsCorrectAnswer(answer.answer_id);
                                            }}>
                                                Mark as correct
                                            </button>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleQuestion
