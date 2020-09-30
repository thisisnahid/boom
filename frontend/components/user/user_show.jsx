import React from 'react';
import NavBar from '../navbar/navbar_container';
import { FaEnvelopeOpenText } from 'react-icons/io';
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
        const { user } = this.props;
        let name, artist, img, trackImg;
        if (user) {
            artist = user;
            img = artist.photoUrl;
            if (user.tracks_ids) {
            trackImg = (this.props.tracks.first).photoUrl
            }
            if (user.username) {
                name = user.username;
            } else {
                name = user.email;
            }
        } else {
            artist, img, trackImg = null;
        }

        
        return(
            <div className="user-show-container">
                <NavBar className="nav-bar-user-show" />
                <div className="user-show-subcontainer">
                    <header className="user-header-container">
                        <img className="profile-pic" src={img} alt="profile-pic"/>
                        <p className="user-name">{name}</p>
                    </header>
                    <div className="tabs-line-container">
                        <ul>
                            <li>All</li>
                            <li>Popular tracks</li>
                            <li>Tracks</li>
                            <li>Albums</li>
                            <li>Playlists</li>
                            <li>Reposts</li>
                            <li><button className="station-button-us">Station</button></li>
                            <li><button className="follow-button-us">Follow</button></li>
                            <li><button className="shar-button-us">Share</button></li>
                        </ul>
                    </div>
                    <div className="bottom-us-container">
                        <div className="us-tracks">
                            <h1>Spotlight</h1>
                            <img className="track-us-img" src={trackImg} alt="track-img-us" />
                        </div>
                        <div className="us-insights">

                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default UserShow;


