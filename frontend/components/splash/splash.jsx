import React from 'react';

class Splash extends React.Component {
    
    render() {
        const { openModal } = this.props;
        return (
            <div className="splash-container">
                <div className="splash">
                    <div className="splash-nav">
                        {/* <img className="boom-logo-splash" src="../../../assets/images/white_sound_cloud_logo.png"/> */}
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
                            <br />
                        {/* <img className="img-background" src="https://a-v2.sndcdn.com/assets/images/hp_image_creator_slide-db400e2f.jpg" /> */}
                        </div>
                        <div className="top-image-text-container">
                            <p className="top-image-text">What's next in music is here on Boom</p>
                            <p className="top-image-subtext">Upload your first track and begin your journey. Boom gives you space to create, find your fans, and connect with other artists.</p>
                            <button className="start-uploading-button">Start uploading today</button>
                        </div>
                    </div>
                    <div className="splash-search-container">
                        <input type="text" className="splash-search-input" placeholder="Search for artists, bands, tracks, or podcasts"/>
                        <a className="or"> or </a>
                        <button className="upload-own-button">Upload Your Own</button>
                    </div>
                    <div className="trending-container">
                        <p className="trending-text">Hear what's trending for free in the Boom community</p>
                        <button className="explore-trending-button">Explore trending playlists</button>
                    </div>
                    <div className="mobile-container">
                        <img className="mobile-img" src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@1x-9c5264ff.jpg" alt=""/>
                        <div className="text-mobile">
                            <p className="never-stop">Never stop listening</p>
                            <p className="ios">Boom is fully available on Web and some features on iOS, Android, Sonos, Chromecast, and Xbox One. </p>
                        </div>
                    </div>
                    <div className="calling-creators-container">
                        <div className="calling-artist-text">
                            <p className="creators-header">Calling all creators</p>
                            <p className="creators-text">Get on Boom to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
                            <button className="find-out-more">Find out more</button>
                        </div>
                    </div>
                    <div className="ty-join-container"> 
                    </div>
                </div>
                <footer className="footer">
                    <ul className="footer-links"> 
                        <li><a href="https://github.com/thisisnahid/boom/">Github - </a></li>
                        <li><a href="https://www.linkedin.com/in/nahid-siddiqui-73179ba9/"> LinkedIn - </a></li>
                        <li><a href="https://groomarts.com/assets/images/_listItem/cute-puppy-1.jpg"> Puppy</a></li>
                    </ul>
                </footer>
            </div >
        )
    }
};

export default Splash;