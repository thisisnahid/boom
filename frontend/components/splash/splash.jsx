import React from 'react';

class Splash extends React.Component {
    
    render() {
        const { openModal } = this.props;
        return (
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
                    <p className="top-image-text">What's next in music is here on Boom</p>
                    <p className="top-image-subtext">Upload your first track and begin your journey. Boom gives you space to create, find your fans, and connect with other artists.</p>
                    <button className="start-uploading-button">Start uploading today</button>
                </div>
                <div className="splash-search-container">
                    <input type="text" className="splash-search-input" value="Search for artists, bands, tracks, or podcasts"/>
                    or
                    <button className="upload-own-button">Upload Your Own</button>
                </div>
                <div className="trending-container">
                    <p className="trending-text">Hear what's trending for free in the Boom community</p>
                    <button className="explore-trending-button">Explore trending playlists</button>
                </div>
                <div className="mobile-container">

                </div>
                <div className="calling-creators-container">

                </div>
                <div className="ty-join-container"> 
                </div>
            </div>
        )
    }
};

export default Splash;