import React from 'react';
import ReactDOM from 'react-dom';

function Quizlet() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">First Question</div>

                        <div className="card-body" id="quiz-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quizlet;

if (document.getElementById('quiz')) {
    ReactDOM.render(<Quizlet/>, document.getElementById('quiz'));
}
