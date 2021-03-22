import Resume from "./Resume";
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import QuestionsList from "./QuestionsList";
import SingleQuestion from "./SingleQuestion";

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/resume' component={Resume} />
                        <Route exact path='/' component={Resume} />
                        <Route exact path='/questions' component={QuestionsList} />
                        <Route exact path='/questions/:id' component={SingleQuestion} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))


export default App;
