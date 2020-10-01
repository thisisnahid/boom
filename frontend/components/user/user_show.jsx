import React from 'react';
import NavBar from '../navbar/navbar_container';
import { FaUserFriends, FaStream, FaPlayCircle, FaShareSquare } from 'react-icons/fa';
import Playbar from '../playbar/playbar_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUsers();
        this.props.fetchAllTracks();
    }

    render() {
        const { user, tracks } = this.props;

        let song;

        

        if (!user) return null;
        if (!tracks) return null;
        
        return(
            <div> 
                <NavBar className="nav-bar-user-show" />
                <div className="user-show-container">
                    <div className="user-show-subcontainer">
                        <header className="user-header-container">
                            <img className="profile-pic" src={user.photoUrl} alt="profile-pic"/>
                            <p className="user-name">{user.username}</p>
                        </header>
                        <div className="tabs-line-container">
                            <ul className="left-tabs">
                                <li>All</li>
                                <li>Popular tracks</li>
                                <li>Tracks</li>
                                <li>Albums</li>
                                <li>Playlists</li>
                                <li>Reposts</li>
                            </ul>
                            <ul className="right-buttons">
                                <li><button className="station-button-us"><FaStream />Station</button></li>
                                <li className="orange-follow"><button className="follow-button-us"><FaUserFriends />Follow</button></li>
                                <li><button className="shar-button-us"><FaShareSquare />Share</button></li>
                            </ul>
                        </div>
                        <div className="bottom-us-container">
                            <div className="us-tracks">
                                <h1>Spotlight</h1>
                                <div className="gif-cs-container">
                                    {/* <img className="coming-soon-gif" src="https://i.gifer.com/P4id.gif" alt=""/> */}
                                </div>
                                {/* <img className="track-us-img" src={trackImg} alt="track-img-us" />
                                {title} */}
                            </div>
                            <div className="us-insights">
                                <div className="following-info-container">
                                    <ul className="following-buttons">
                                        <li><h1 className="following-b-text">Followers</h1><button>432M</button></li>
                                        <li id="following-b-mid"><h1 className="following-b-text">Following</h1><button>1</button></li>
                                        <li><h1 className="following-b-text">Tracks</h1><button>48</button></li>
                                    </ul>
                                </div>
                                <div className="empowering-text">
                                    <h1>Empowering a creative and passionate community through innovation. Welcome to the Family!</h1>
                                </div>
                                <div className="ad-container">
                                    <img className="gif-ad" src="https://media.giphy.com/media/NU8tcjnPaODTy/giphy.gif" alt="" />
                                </div>
                                <div className="ts-footer-container">
                                    <ul className="ts-footer-links">
                                        <li><a href="https://github.com/thisisnahid/boom/">Github - </a></li>
                                        <li><a href="https://www.linkedin.com/in/nahid-siddiqui-73179ba9/"> LinkedIn - </a></li>
                                        <li><a href="https://groomarts.com/assets/images/_listItem/cute-puppy-1.jpg"> Puppy</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
};

export default UserShow;


