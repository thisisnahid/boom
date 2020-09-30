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
        const { user, tracks } = this.props;

        let song;

        // let name, artist, img, trackImg;
        // if (user) {
        //     artist = user;
        //     img = artist.photoUrl;
        //     if (user.tracks_ids) {
        //     trackImg = (this.props.tracks.first).photoUrl
        //     }
        //     if (user.username) {
        //         name = user.username;
        //     } else {
        //         name = user.email;
        //     }
        // } else {
        //     artist, img, trackImg = null;
        // }

        if (Object.values(tracks).indexOf(user.id) > -1) {
            console.log('has test1');
        }

        if (tracks) {
            song = tracks.filter(track => track.artist_id === user.id);
        } else {
            song = null;
        }

        if (!user) return null;
        if (!tracks) return null;
        
        return(
            <div className="user-show-container">
                <NavBar className="nav-bar-user-show" />
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
                            <li><button className="station-button-us">Station</button></li>
                            <li><button className="follow-button-us">Follow</button></li>
                            <li><button className="shar-button-us">Share</button></li>
                        </ul>
                    </div>
                    <div className="bottom-us-container">
                        <div className="us-tracks">
                            <h1>Spotlight</h1>
                            <img className="track-us-img" src={song.photoUrl} alt="track-img-us" />
                            {song.title}
                        </div>
                        <div className="us-insights">
                            <div className="following-info-container">
                                <ul className="following-buttons">
                                    <li><button>1.06M</button></li>
                                    <li><button></button></li>
                                    <li><button></button></li>
                                </ul>
                            </div>
                            <div>
                                <h1>Empowering a creative and passionate community through innovation. Welcome to the Family!</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default UserShow;


