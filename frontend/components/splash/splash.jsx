import React from 'react';

class Splash extends React.Component {
    
    render() {
        const { openModal } = this.props;
        return (
            <div className="splash">
                <div className="splash-nav">
                    <img className="boom-logo-splash" src="../../../assets/images/white_sound_cloud_logo.png"/>
                    <a className="boom-text">Boom</a>
                    <div className="right-session-buttons">
                        <button 
                            className="signin-button" 
                            onClick={() => openModal("login")}>
                                Sign In
                        </button>
                        <button
                            className="create-account-button"
                            onClick={() => openModal("signup")}>
                            Create Account
                        </button>
                        <button
                            className="for-creators-button">
                            For Creators
                         </button>
                    </div>
                </div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                {/* <img className="img-background" src="https://a-v2.sndcdn.com/assets/images/hp_image_creator_slide-db400e2f.jpg" /> */}
                <p className="top-image-text">What's next in music is here on Boom</p>
            </div>
        )
    }
};

export default Splash;