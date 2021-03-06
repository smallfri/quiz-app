//renders the questions list

import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class QuestionsList extends Component {
    constructor () {
        super()
        this.state = {
            questions: []
        }
    }

    componentDidMount () {
        axios.get('api/questions').then(response => {
            // console.log(response.data);
            this.setState({
                questions: response.data
            })
        })
    }

    render () {
        const { questions } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>All questions</div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    {questions.map(question => (
                                        <Link
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            to={`/questions/${question.id}`}
                                            key={question.id}
                                        >
                                            {question.question}
                                            <span className='badge badge-primary badge-pill'>
                            {question.complete}
                          </span>
                                        </Link>
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

export default QuestionsList
