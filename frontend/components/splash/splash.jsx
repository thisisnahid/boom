import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    componentDidMount() {
        this.props.fetchAllTracks()
    }
    
    render() {
        const { openModal, tracks } = this.props;
        let t1, t2, t3, t4, t5, t6,
            t7, t8, t9, t10, t11, t12,
            tracksArr, exploreTracks;

        if (tracks) {
            tracksArr = tracks;
        } else {
            tracksArr = null;
        }
        if (tracksArr) {
            t1 = tracksArr[4], t2 = tracksArr[10], t3 = tracksArr[2], 
            t4 = tracksArr[3], t5 = tracksArr[11], t6 = tracksArr[0], 
            t7 = tracksArr[12], t8 = tracksArr[13], t9 = tracksArr[5], 
            t10 = tracksArr[9], t11 = tracksArr[7], t12 = tracksArr[15]
        } else {
            t1, t2, t3, t4, t5, t6,
            t7, t8, t9, t10, t11, t12 = null
        }
        if (t1, t2, t3, t4, t5, t6,
            t7, t8, t9, t10, t11, t12) {
                exploreTracks = (
                        <div>
                            <div className="first-row-exlpore">
                                <ul>
                                    <li>
                                        <img className="e-img" src={t1.photoUrl} alt="t1-img" />
                                        <span className="e-title">{t1.title}</span><br />
                                        <span className="e-artist">{t1.artist}</span>
                                    </li>
                                    <li>
                                        <img className="e-img" src={t2.photoUrl} alt="t2-img" />
                                        <span className="e-title">{t2.title}</span><br />
                                        <span className="e-artist">{t2.artist}</span>
                                    </li>
                                    <li>
                                        <img className="e-img" src={t3.photoUrl} alt="t3-img" />
                                        <span className="e-title">{t3.title}</span><br />
                                        <span className="e-artist">{t3.artist}</span>
                                    </li>
                                    <li>
                                        <img className="e-img" src={t4.photoUrl} alt="-img" />
                                        <span className="e-title">{t4.title}</span><br />
                                        <span className="e-artist">{t4.artist}</span>
                                    </li>
                                    <li>
                                        <img className="e-img" src={t5.photoUrl} alt="-img" />
                                        <span className="e-title">{t5.title}</span><br />
                                        <span className="e-artist">{t5.artist}</span>
                                    </li>
                                    <li>
                                        <img className="e-img" src={t6.photoUrl} alt="-img" />
                                        <span className="e-title">{t6.title}</span><br />
                                        <span className="e-artist">{t6.artist}</span>
                                    </li>
                                </ul>
                            </div>
                        <div className="second-row-exlpore">
                            <ul>
                                <li>
                                    <img className="e-img" src={t7.photoUrl} alt="t7-img" />
                                    <span className="e-title">{t7.title}</span><br />
                                    <span className="e-artist">{t7.artist}</span>
                                </li>
                                <li>
                                    <img className="e-img" src={t8.photoUrl} alt="t8-img" />
                                    <span className="e-title">{t8.title}</span><br />
                                    <span className="e-artist">{t8.artist}</span>
                                </li>
                                <li>
                                    <img className="e-img" src={t9.photoUrl} alt="t9-img" />
                                    <span className="e-title">{t9.title}</span><br />
                                    <span className="e-artist">{t9.artist}</span>
                                </li>
                                <li>
                                    <img className="e-img" src={t10.photoUrl} alt="-img" />
                                    <span className="e-title">{t10.title}</span><br />
                                    <span className="e-artist">{t10.artist}</span>
                                </li>
                                <li>
                                    <img className="e-img" src={t11.photoUrl} alt="-img" />
                                    <span className="e-title">{t11.title}</span><br />
                                    <span className="e-artist">{t11.artist}</span>
                                </li>
                                <li>
                                    <img className="e-img" src={t12.photoUrl} alt="-img" />
                                    <span className="e-title">{t12.title}</span><br />
                                    <span className="e-artist">{t12.artist}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            } else {
                exploreTracks = null;
            }

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
                            {/* <button
                                className="for-creators-button">
                                For Creators
                            </button> */}
                            <br />
                        </div>
                        <div className="top-image-text-container">
                            <p className="top-image-text">What's next in music is here on Boom</p>
                            <p className="top-image-subtext">Upload your first track and begin your journey. Boom gives you space to create, find your fans, and connect with other artists.</p>
                            <button className="start-uploading-button">Start uploading today</button>
                        </div>
                    </div>
                    <div className="splash-search-container">
                        {/* <input type="text" className="splash-search-input" placeholder="Search for artists, bands, tracks, or podcasts"/>
                        <a className="or"> or </a>
                        <button className="upload-own-button">Upload Your Own</button> */}
                    </div>
                    <div className="trending-container">
                        <p className="trending-text">See what's trending for free in the Boom community</p>
                        <div className="tracks-container-e">
                            {exploreTracks}
                        </div>
                        <button className="explore-trending-button">Explore trending playlists</button>
                    </div>
                    <div className="mobile-container">
                        <img className="mobile-img" src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@1x-9c5264ff.jpg" alt=""/>
                        <div className="text-mobile">
                            <p className="never-stop">Never stop listening</p>
                            <p className="ios">Boom is partly available on Web and some features on iOS, Android, Sonos, Chromecast, and Xbox One. </p>
                        </div>
                    </div>
                    <div className="calling-creators-container">
                        <div className="calling-artist-text">
                            <p className="creators-header">Calling all creators</p>
                            <p className="creators-text">Get on Boom to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
                            <button onClick={() => openModal("signup")} className="find-out-more">Find out more</button>
                        </div>
                    </div>
                    <div className="ty-join-container"> 
                        <h1>Thanks for listening. Now join in.</h1>
                        <h2>Save tracks, follow artists and build playlists. All for free.</h2>
                        <button className="ty-signup-button" onClick={() => openModal("signup")}>Create Account</button>
                        <div className="ty-login-container">
                            <a>Already have an account?</a>
                            <button className="ty-login-button" onClick={() => openModal("login")}>Sign In</button>
                        </div>
                    </div>
                    <footer className="footer">
                        <ul className="footer-links"> 
                            <li><a href="https://github.com/thisisnahid/boom/">Github - </a></li>
                            <li><a href="https://www.linkedin.com/in/nahid-siddiqui-73179ba9/"> LinkedIn - </a></li>
                            <li><a href="https://groomarts.com/assets/images/_listItem/cute-puppy-1.jpg"> Puppy</a></li>
                        </ul>
                    </footer>
                </div>
            </div >
        )
    }
};

export default Splash;