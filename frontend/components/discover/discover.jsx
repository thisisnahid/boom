import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar_container';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.tracks;
    }

    componentDidMount() {
        this.props.fetchAllTracks();
        // this.props.fetchUsers();
    }
    
    trackListItems(trackList) {
        // let rendered = [];
        return trackList.map(track => {
            return (
                <div className="track-item">
                <img className="track-artwork" src={track.photoUrl} alt={track.title} />
                <p>{track.title}</p>
                <p>{track.artist}</p>
            </div>
             )
         })
        //  return rendered;
        }

    render() {

        const { tracks } = this.props
        let tracklist1 = [], t1t1, t1t2, t1t3, t1t4,
            tracklist2 = [], t2t1 ,t2t2, t2t3, t2t4,
            tracklist3 = [], t3t1, t3t2, t3t3, t3t4, t3t5,
            tracklist4 = [], t4t1, t4t2, t4t3, t4t4, t4t5,
            playlist1, playlist2, playlist3, playlist4;
    
        let tracksArray;
        if (tracks) {
            tracksArray = Object.values(Object.values(tracks))
        } else {
            tracksArray = null    
        }

        if (tracksArray) {
            tracklist1.push(tracksArray[4], tracksArray[9], tracksArray[12], tracksArray[16]);
            tracklist2.push(tracksArray[5], tracksArray[6], tracksArray[7], tracksArray[8]); 
            tracklist3.push(tracksArray[11], tracksArray[1], tracksArray[14], tracksArray[15], tracksArray[3]); 
            tracklist4.push(tracksArray[2], tracksArray[3], tracksArray[10], tracksArray[13], tracksArray[0]);  
        }; 

        if (tracklist1, tracklist2, tracklist3, tracklist4) {
            t1t1 = tracklist1[0];
            t1t2 = tracklist1[1];
            t1t3 = tracklist1[2];
            t1t4 = tracklist1[3];
            t2t1 = tracklist2[0];
            t2t2 = tracklist2[1];
            t2t3 = tracklist2[2];
            t2t4 = tracklist2[3];
            t3t1 = tracklist3[0];
            t3t2 = tracklist3[1];
            t3t3 = tracklist3[2];
            t3t4 = tracklist3[3];
            t3t5 = tracklist4[4];
            t4t1 = tracklist4[0];
            t4t2 = tracklist4[1];
            t4t3 = tracklist4[2];
            t4t4 = tracklist4[3];
            t4t5 = tracklist4[4];
        } else {
            t1t1, t1t2, t1t3, t1t4,
            t2t1, t2t2, t2t3, t2t4,
            t3t1, t3t2, t3t3, t3t4, t3t5,
            t4t1, t4t2, t4t3, t4t4, t4t5 = null
        };

        if (t1t1, t1t2, t1t3, t1t4,
            t2t1, t2t2, t2t3, t2t4,
            t3t1, t3t2, t3t3, t3t4, t3t5,
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
                            <img className="t-img" src={t1t1.photoUrl} alt="t1t1-img"/>
                            <Link to={`/tracks/${t1t1.id}`} className="t-title">{t1t1.title}</Link><br />
                            <Link to="" className="t-artist">{t1t1.artist}</Link>
                            {/* was not reading the id, why???! {`/users/${t1t1.artist.id}`}  */}
                            {/* <audio src={t1t1.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t1t2.photoUrl} alt="t1t2-img" />
                            <Link to={`/tracks/${t1t2.id}`} className="t-title">{t1t2.title}</Link><br />
                            <Link to="" className="t-artist">{t1t2.artist}</Link>
                            {/* <audio className="t-audio" src={t1t2.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t1t3.photoUrl} alt="t1t3-img" />
                            <Link to={`/tracks/${t1t3.id}`} className="t-title">{t1t3.title}</Link><br />
                            <Link to="" className="t-artist">{t1t3.artist}</Link>
                            {/* <audio src={t1t3.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t1t4.photoUrl} alt="t1-img" />
                            <Link to={`/tracks/${t1t4.id}`} className="t-title">{t1t4.title}</Link><br />
                            <Link to="" className="t-artist">{t1t4.artist}</Link>
                            {/* <audio src={t1t4.songUrl} controls /> */}
                        </li>
                    </ul>
                </div>
            );
            playlist2 = (
                <div className="playlist2-container">
                    <div className="playlist-titles">
                        <h1 className="t1-name">What's popular in K-Pop</h1>
                        <h2 className="t1-details">Boom's most popular tracks in K-Pop</h2>
                    </div>
                    <br />
                    <ul className="playlist1-tracks">
                        <li>
                            <img className="t-img" src={t2t1.photoUrl} alt="t2t1-img" />
                            <Link to={`/tracks/${t2t1.id}`} className="t-title">{t2t1.title}</Link><br />
                            <Link to="" className="t-artist">{t2t1.artist}</Link>
                            {/* was not reading the id, why???! {`/users/${t2t1.artist.id}`}  */}
                            {/* <audio src={t2t1.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t2t2.photoUrl} alt="t2t2-img" />
                            <Link to={`/tracks/${t2t2.id}`} className="t-title">{t2t2.title}</Link><br />
                            <Link to="" className="t-artist">{t2t2.artist}</Link>
                            {/* <audio className="t-audio" src={t2t2.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t2t3.photoUrl} alt="t2t3-img" />
                            <Link to={`/tracks/${t2t3.id}`} className="t-title">{t2t3.title}</Link><br />
                            <Link to="" className="t-artist">{t2t3.artist}</Link>
                            {/* <audio src={t2t3.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t2t4.photoUrl} alt="t2t4-img" />
                            <Link to={`/tracks/${t2t4.id}`} className="t-title">{t2t4.title}</Link><br />
                            <Link to="" className="t-artist">{t2t4.artist}</Link>
                            {/* <audio src={t2t4.songUrl} controls /> */}
                        </li>
                    </ul>
                </div>
            );
            playlist3 = (
                <div className="playlist3-container">
                    <div className="playlist-titles">
                        <h1 className="t1-name">Alternative Route</h1>
                        <h2 className="t1-details">Up {'&'} Coming Alternative Songs </h2>
                    </div>
                    <br />
                    <ul className="playlist1-tracks">
                        <li>
                            <img className="t-img" src={t3t1.photoUrl} alt="t3t1-img" />
                            <Link to={`/tracks/${t3t1.id}`} className="t-title">{t3t1.title}</Link><br />
                            <Link to="" className="t-artist">{t3t1.artist}</Link>
                            {/* was not reading the id, why???! {`/users/${t2t1.artist.id}`}  */}
                            {/* <audio src={t3t1.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t3t2.photoUrl} alt="t3t2-img" />
                            <Link to={`/tracks/${t3t2.id}`} className="t-title">{t3t2.title}</Link><br />
                            <Link to="" className="t-artist">{t3t2.artist}</Link>
                            {/* <audio className="t-audio" src={t3t2.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t3t3.photoUrl} alt="t3t3-img" />
                            <Link to={`/tracks/${t3t3.id}`} className="t-title">{t3t3.title}</Link><br />
                            <Link to="" className="t-artist">{t3t3.artist}</Link>
                            {/* <audio src={t3t3.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t3t4.photoUrl} alt="t3t4-img" />
                            <Link to={`/tracks/${t3t4.id}`} className="t-title">{t3t4.title}</Link><br />
                            <Link to="" className="t-artist">{t3t4.artist}</Link>
                            {/* <audio src={t3t4.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t3t5.photoUrl} alt="t3t5-img" />
                            <Link to={`/tracks/${t3t5.id}`} className="t-title">{t3t5.title}</Link><br />
                            <Link to="" className="t-artist">{t3t5.artist}</Link>
                            {/* <audio src={t3t5.songUrl} controls /> */}
                        </li>
                    </ul>
                </div>
            );
            playlist4 = (
                <div className="playlist3-container">
                    <div className="playlist-titles">
                        <h1 className="t1-name">Alternative Route</h1>
                        <h2 className="t1-details">Up {'&'} Coming Alternative Songs </h2>
                    </div>
                    <br />
                    <ul className="playlist1-tracks">
                        <li>
                            <img className="t-img" src={t4t1.photoUrl} alt="t4t1-img" />
                            <Link to={`/tracks/${t4t1.id}`} className="t-title">{t4t1.title}</Link><br />
                            <Link to="" className="t-artist">{t4t1.artist}</Link>
                            {/* was not reading the id, why???! {`/users/${t2t1.artist.id}`}  */}
                            {/* <audio src={t4t1.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t4t2.photoUrl} alt="t4t2-img" />
                            <Link to={`/tracks/${t4t2.id}`} className="t-title">{t4t2.title}</Link><br />
                            <Link to="" className="t-artist">{t4t2.artist}</Link>
                            {/* <audio className="t-audio" src={t4t2.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t4t3.photoUrl} alt="t4t3-img" />
                            <Link to={`/tracks/${t4t3.id}`} className="t-title">{t4t3.title}</Link><br />
                            <Link to="" className="t-artist">{t4t3.artist}</Link>
                            {/* <audio src={t4t3.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t4t4.photoUrl} alt="t4t4-img" />
                            <Link to={`/tracks/${t4t4.id}`} className="t-title">{t4t4.title}</Link><br />
                            <Link to="" className="t-artist">{t4t4.artist}</Link>
                            {/* <audio src={t4t4.songUrl} controls /> */}
                        </li>
                        <li>
                            <img className="t-img" src={t4t5.photoUrl} alt="t4t5-img" />
                            <Link to={`/tracks/${t4t5.id}`} className="t-title">{t4t5.title}</Link><br />
                            <Link to="" className="t-artist">{t4t5.artist}</Link>
                            {/* <audio src={t4t5.songUrl} controls /> */}
                        </li>
                    </ul>
                </div>
            );
        } else {
            playlist1, playlist2, playlist3, playlist4 = null
        };

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
                    </div>
                </div>
            </div>
        )
    }
};

export default Discover;