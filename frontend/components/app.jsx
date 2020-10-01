import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import UserShowContainer from "./user/user_show_container";
import DiscoverContainer from "./discover/discover_container";
import SplashContainer from "./splash/splash_container";
import TrackShowContainer from "./track/track_show_container";
import TrackUpload from "./track/track_upload/track_upload_container";
import Modal from "./modal/modal"
import Playbar from "./playbar/playbar_container";

const App = () => (
    <div>
        <Modal />
            <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
            <ProtectedRoute path="/tracks/:trackId" component={TrackShowContainer} />
            <ProtectedRoute path="/track/upload" component={TrackUpload} />
        <Playbar />
    </div>
);

export default App;
