import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { AuthRoute } from "../util/route_util"
import UserShowContainer from "./user/user_show_container";
import DiscoverContainer from "./discover/discover_container";
import SplashContainer from "./splash/splash_container";
import Modal from "./modal/modal"
// import NavBar from "./navbar/navbar_container";

const App = () => (
    <div>
        <Modal />

        <AuthRoute exact path="/" component={SplashContainer} />
        <Route exact path="/users/:userId" component={UserShowContainer} />
        <Route exact path="/discover" component={DiscoverContainer} />
    </div>
);

export default App;
