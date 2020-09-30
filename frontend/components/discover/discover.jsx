import React from 'react';
import NavBar from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaStream, FaPlayCircle } from 'react-icons/fa';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.tracks;
    }

    componentDidMount() {
        this.props.fetchAllTracks();
        this.props.fetchUsers();
    }
    
    trackListItems(trackList) {
        return trackList.map(track => {
            return (
                <div className="track-item">
                <img className="track-artwork" src={track.photoUrl} alt={track.title} />
                <p>{track.title}</p>
                <p>{track.artist}</p>
            </div>
            )
        })
    }

    render() {
        const { tracks, currentUser, users, receiveSelectedTrack } = this.props

        let tracklist1 = [], t1t1, t1t2, t1t3, t1t4,
            tracklist2 = [], t2t1 ,t2t2, t2t3, t2t4,
            tracklist3 = [], t3t1, t3t2, t3t3, t3t4,
            tracklist4 = [], t4t1, t4t2, t4t3, t4t4, t4t5,
            playlist1, playlist2, playlist3, playlist4,
            rightSidebar, usersArr, a1, a2, a3, a1i, a2i, a3i;
    
        let tracksArray;
        if (tracks) {
            tracksArray = Object.values(Object.values(tracks))
        } else {
            tracksArray = null    
        }

        if (tracksArray) {
            tracklist1.push(tracksArray[4], tracksArray[10], tracksArray[13], tracksArray[16]);
            tracklist2.push(tracksArray[5], tracksArray[6], tracksArray[7], tracksArray[8]); 
            tracklist3.push(tracksArray[2], tracksArray[11], tracksArray[14], tracksArray[9]); 
            tracklist4.push(tracksArray[3], tracksArray[12], tracksArray[0], tracksArray[1], tracksArray[15]);  
        }; 

        if (tracklist1, tracklist2, tracklist3, tracklist4) {
            t1t1 = tracklist1[0]; t1t2 = tracklist1[1];
            t1t3 = tracklist1[2]; t1t4 = tracklist1[3];
            t2t1 = tracklist2[0]; t2t2 = tracklist2[1];
            t2t3 = tracklist2[2]; t2t4 = tracklist2[3];
            t3t1 = tracklist3[0]; t3t2 = tracklist3[1];
            t3t3 = tracklist3[2]; t3t4 = tracklist3[3];
            t4t1 = tracklist4[0]; t4t2 = tracklist4[1];
            t4t3 = tracklist4[2]; t4t4 = tracklist4[3];
            t4t5 = tracklist4[4];
        } else {
            t1t1, t1t2, t1t3, t1t4,
            t2t1, t2t2, t2t3, t2t4,
            t3t1, t3t2, t3t3, t3t4,
            t4t1, t4t2, t4t3, t4t4, t4t5 = null
        };

        if (t1t1, t1t2, t1t3, t1t4,
            t2t1, t2t2, t2t3, t2t4,
            t3t1, t3t2, t3t3, t3t4,
            t4t1, t4t2, t4t3, t4t4, t4t5) {
            playlist1 = (
                <div className="playlist1-container">
                    <div className="playlist-titles">
                        <h1 className="t1-name">Boom: Trending</h1>
                        <h2 className="t1-details">The most played tracks on Boom this week</h2>
                    </div>
                    <br />
                    <ul className="playlist1-tracks">
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t1t1)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70}/></a>
                                    </div>
                                    <img className="t-img" src={t1t1.photoUrl} alt="t1t1-img"/>
                                </button>
                            </div>
                            <Link to={`/tracks/${t1t1.id}`} className="t-title">{t1t1.title}</Link><br />
                            <Link to={`/users/${t1t1.artist.id}`} className="t-artist">{t1t1.artist}</Link>
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t1t2)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t1t2.photoUrl} alt="t1t2-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t1t2.id}`} className="t-title">{t1t2.title}</Link><br />
                            <Link to={`/users/${t1t2.artist.id}`} className="t-artist">{t1t2.artist}</Link>
                            {/* <audio className="t-audio" src={t1t2.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t1t3)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t1t3.photoUrl} alt="t1t3-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t1t3.id}`} className="t-title">{t1t3.title}</Link><br />
                            <Link to={`/users/${t1t3.artist.id}`} className="t-artist">{t1t3.artist}</Link>
                            {/* <audio src={t1t3.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t1t4)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t1t4.photoUrl} alt="t1-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t1t4.id}`} className="t-title">{t1t4.title}</Link><br />
                            <Link to={`/users/${t1t4.artist.id}`} className="t-artist">{t1t4.artist}</Link>
                            {/* <audio src={t1t4.songUrl} controls /> */}
                        </li>
                    </ul>
                </div>
            );
            playlist2 = (
                <div className="playlist2-container">
                    <div className="playlist-titles">
                        <h1 className="t1-name">What's popular in K-Pop</h1>
                        <h2 className="t1-details">K-Pop listener favorites</h2>
                    </div>
                    <br />
                    <ul className="playlist1-tracks">
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t2t1)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t2t1.photoUrl} alt="t2t1-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t2t1.id}`} className="t-title">{t2t1.title}</Link><br />
                            <Link to={`/users/${t2t1.artist.id}`} className="t-artist">{t2t1.artist}</Link>
                            {/* was not reading the id, why???! {`/users/${t2t1.artist.id}`}  */}
                            {/* <audio src={t2t1.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t2t2)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t2t2.photoUrl} alt="t2t2-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t2t2.id}`} className="t-title">{t2t2.title}</Link><br />
                            <Link to={`/users/${t2t2.artist.id}`} className="t-artist">{t2t2.artist}</Link>
                            {/* <audio className="t-audio" src={t2t2.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t2t3)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t2t3.photoUrl} alt="t2t3-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t2t3.id}`} className="t-title">{t2t3.title}</Link><br />
                            <Link to={`/users/${t2t3.artist.id}`} className="t-artist">{t2t3.artist}</Link>
                            {/* <audio src={t2t3.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t2t4)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t2t4.photoUrl} alt="t2t4-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t2t4.id}`} className="t-title">{t2t4.title}</Link><br />
                            <Link to={`/users/${t2t4.artist.id}`} className="t-artist">{t2t4.artist}</Link>
                            {/* <audio src={t2t4.songUrl} controls /> */}
                        </li>
                    </ul>
                </div>
            );
            playlist3 = (
                <div className="playlist3-container">
                    <div className="playlist-titles">
                        <h1 className="t1-name">Alternative Route</h1>
                        <h2 className="t1-details">Up {'&'} coming Alternative songs </h2>
                    </div>
                    <br />
                    <ul className="playlist1-tracks">
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t3t1)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t3t1.photoUrl} alt="t3t1-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t3t1.id}`} className="t-title">{t3t1.title}</Link><br />
                            <Link to={`/users/${t3t1.artist.id}`} className="t-artist">{t3t1.artist}</Link>
                            {/* was not reading the id, why???! {`/users/${t2t1.artist.id}`}  */}
                            {/* <audio src={t3t1.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t3t2)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t3t2.photoUrl} alt="t3t2-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t3t2.id}`} className="t-title">{t3t2.title}</Link><br />
                            <Link to={`/users/${t3t2.artist.id}`} className="t-artist">{t3t2.artist}</Link>
                            {/* <audio className="t-audio" src={t3t2.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t3t3)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t3t3.photoUrl} alt="t3t3-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t3t3.id}`} className="t-title">{t3t3.title}</Link><br />
                            <Link to={`/users/${t3t3.artist.id}`} className="t-artist">{t3t3.artist}</Link>
                            {/* <audio src={t3t3.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t3t4)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t3t4.photoUrl} alt="t3t4-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t3t4.id}`} className="t-title">{t3t4.title}</Link><br />
                            <Link to={`/users/${t3t4.artist.id}`} className="t-artist">{t3t4.artist}</Link>
                            {/* <audio src={t3t4.songUrl} controls /> */}
                        </li>
                    </ul>
                </div>
            );
            playlist4 = (
                <div className="playlist4-container">
                    <div className="playlist-titles">
                        <h1 className="t1-name">Pop Hits</h1>
                        <h2 className="t1-details">Boom's most played in Pop</h2>
                    </div>
                    <br />
                    <ul className="playlist1-tracks">
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t4t1)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t4t1.photoUrl} alt="t4t1-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t4t1.id}`} className="t-title">{t4t1.title}</Link><br />
                            <Link to={`/users/${t4t1.artist.id}`} className="t-artist">{t4t1.artist}</Link>
                            {/* was not reading the id, why???! {`/users/${t2t1.artist.id}`}  */}
                            {/* <audio src={t4t1.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t4t2)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t4t2.photoUrl} alt="t4t2-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t4t2.id}`} className="t-title">{t4t2.title}</Link><br />
                            <Link to={`/users/${t4t2.artist.id}`} className="t-artist">{t4t2.artist}</Link>
                            {/* <audio className="t-audio" src={t4t2.songUrl} controls /> */}
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t4t3)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t4t3.photoUrl} alt="t4t3-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t4t3.id}`} className="t-title">{t4t3.title}</Link><br />
                            <Link to={`/users/${t4t3.artist.id}`} className="t-artist">{t4t3.artist}</Link>
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t4t4)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t4t4.photoUrl} alt="t4t4-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t4t4.id}`} className="t-title">{t4t4.title}</Link><br />
                            <Link to={`/users/${t4t4.artist.id}`} className="t-artist">{t4t4.artist}</Link>
                        </li>
                        <li>
                            <div className="track-play-button-container">
                                <button className="track-play-button" onClick={() => receiveSelectedTrack(t4t5)}>
                                    <div className="play-circle-container-track">
                                        <a><FaPlayCircle size={70} /></a>
                                    </div>
                                    <img className="t-img" src={t4t5.photoUrl} alt="t4t5-img" />
                                </button>
                            </div>
                            <Link to={`/tracks/${t4t5.id}`} className="t-title">{t4t5.title}</Link><br />
                            <Link to={`/users/${t4t5.artist.id}`} className="t-artist">{t4t5.artist}</Link>
                        </li>
                    </ul>
                </div>
            );
        } else {
            playlist1, playlist2, playlist3, playlist4 = null
        };

        
        if (currentUser) {
            let name;
            if (currentUser.username) {
                name = currentUser.username;
            } else if (currentUser.email) {
                name = currentUser.email;
            } else {
                name = null;
            }

            if (users.length > 1) {
                usersArr = users;
                a1 = usersArr[1].username; a1i = usersArr[1].photoUrl;
                a2 = usersArr[5].username; a2i = usersArr[5].photoUrl;
                a3 = usersArr[9].username; a3i = usersArr[9].photoUrl;
            } else {
                usersArr, a1, a2, a3 = [];
            }

            rightSidebar = (
                <div className="sidebar-main">
                    <div className="discover-sidebar-greeting">
                        <h1 className="h1-d-sidebar">Hey, {name} you have</h1>
                        <h2 className="h2-d-sidebar">4,523,748 Plays</h2>
                        <h3 className="h3-d-sidebar">LAST 7 DAYS</h3>
                    </div>
                    <div className="sidebar-2">
                        <button className="insights-button">View your Insights</button>
                    </div>
                    <div className="sidebar-follow">
                        <ul className="follow-ul">
                            <h1 className="who-to-follow"><a className="follow-i-sb"><FaUserFriends /></a>Who to follow</h1>
                            <li className="who-to-follow-a">
                                <Link to="" ><img className="artist-img" src={a3i} alt={a3} /></Link>
                                <div className="right-img-txt">
                                    <Link to="" ><h1 className="a-name">{a3}</h1></Link>
                                    <div className="sb-follow-icons">
                                        <a ><FaUserFriends />5,683</a>
                                        <div className="sb-stream-img"><FaStream /></div>19
                                    </div>
                                </div>
                            </li>
                            <li className="who-to-follow-a"> 
                                <Link to="" ><img className="artist-img" src={a2i} alt={a2} /></Link>
                                <div className="right-img-txt">
                                    <Link to="" ><h1 className="a-name">{a2}</h1></Link>
                                    <div className="sb-follow-icons">
                                        <a ><FaUserFriends />28,753</a>
                                        <div className="sb-stream-img"><FaStream /></div>8
                                    </div>
                                </div>
                            </li>
                            <li className="who-to-follow-a">
                                <Link to="" ><img className="artist-img" src={a1i} alt={a1} /></Link>
                                <div className="right-img-txt">
                                    <Link to="" ><h1 className="a-name">{a1}</h1></Link >
                                    <div className="sb-follow-icons">
                                        <a ><FaUserFriends />11,861</a>
                                        <div className="sb-stream-img"><FaStream /></div>21
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="sb-footer-container">
                            <ul className="sb-footer-links">
                                <li><a href="https://github.com/thisisnahid/boom/">Github - </a></li>
                                <li><a href="https://www.linkedin.com/in/nahid-siddiqui-73179ba9/"> LinkedIn - </a></li>
                                <li><a href="https://groomarts.com/assets/images/_listItem/cute-puppy-1.jpg"> Puppy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            rightSidebar = null;
        }

        return(
            <div>
                <NavBar/>
                <div className="discover-container">
                    <div className="discover-subcontainer">
                        <div className="playlists-container">
                            <br /><br /><br />
                            <br />
                            <ul>
                                <li>{playlist1}<br /></li>
                                <li>{playlist2}<br /></li>
                                <li>{playlist3}<br /></li>
                                <li>{playlist4}<br /></li>
                            </ul>
                        </div>
                        <div className="discover-sidebar-container">
                            {rightSidebar}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Discover;