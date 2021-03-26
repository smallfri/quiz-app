//renders the resume

import React from 'react';

function Resume() {


    return <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Learn more about Russell Hudson</div>
                </div>

                <div className="card-body" id="quiz-body">
                    <embed src={window.location.origin + '/images/resume.pdf'} width="100%" height="2100px"/>
                </div>
            </div>
        </div>
    </div>

}

export default Resume;
