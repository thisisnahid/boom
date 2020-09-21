import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpFormContainer from '.session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => {
    return (
        <div>
            <h1>BOOM</h1>
            <Switch>
                <Route exact path="/login" component={LogInFormContainer} />
                <Route exact path="/signup" component={SignUpFormContainer} />
            </Switch>
        </div>
    )
};

export default App;
