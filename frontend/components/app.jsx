import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import UserShowContainer from "./user/user_show_container";
import DiscoverContainer from "./discover/discover_container";
import SplashContainer from "./splash/splash_container";
import TrackShowContainer from "./track/track_show_container";
import Modal from "./modal/modal"
import Playbar from "./playbar/playbar_container";
// import NavBar from "./navbar/navbar_container";

const App = () => (
    <div>
        <Modal />
            <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
            <ProtectedRoute path="/tracks/:trackId" component={TrackShowContainer} />
        <Playbar />
    </div>
);

export default App;
