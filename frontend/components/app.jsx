import React from "react";
import { Switch } from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { AuthRoute } from "../util/route_util"

const App = () => (
    <div>
        <header>
            <h1>Boom</h1>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </header>
    </div>
);

export default App;
