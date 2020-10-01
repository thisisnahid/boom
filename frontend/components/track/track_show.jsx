import React from 'react';
import NavBar from '../navbar/navbar_container';
import { FaPlayCircle, FaPauseCircle, FaHeart, FaRedo, FaShareSquare, FaPlus, FaUserFriends, FaStream } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.songPlaying;
        this.handlePlay = this.handlePlay.bind(this);
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId),
        this.props.fetchUsers()
    }

    handlePlay() {
        this.props.receiveSelectedTrack(this.props.track);
        this.setState({songPlaying: !this.state.songPlaying})
    }

    render() {
        const { track, users, songPlaying } = this.props;
        
        let trackShow, trackArtist, trackArtistBlock, playButton;

        if (track) { 

            let artistName;

            if (users[track.artist_id]) {
                trackArtist = users[track.artist_id];

                trackArtistBlock = (
                    <div className="main-ts-bottom">
                        <div className="left-artist-bar-container">
                            <div className="artist-img-container">
                            <Link to={`/users/${track.artist_id}`}><img className="artist-profile-img" src={trackArtist.photoUrl} alt={trackArtist.username} /></Link>
                            </div>
                            <div className="artist-username-container">
                                <Link to={`/users/${track.artist_id}`}><h1>{trackArtist.username}</h1></Link>
                                <div className="sb-follow-icons">
                                    <a ><FaUserFriends />28,753</a>
                                    <div className="sb-stream-img"><FaStream /></div>8
                                </div>
                            </div>
                        </div>
                        <div className="mid-track-bar-container">
                            <div className="artist-info">
                                <h2>
                                    Hey, it's {trackArtist.username}!
                                    You can follow now on Instagram, Twitter, YouTube, {`&`} Boom
                                </h2>
                            </div>
                        </div>
                    </div>
                )
            } else {
                trackArtist = null;
            }

            // if (songPlaying) {
            //     playButton = (
            //         <a className="track-header-play-icon" onClick={this.handlePlay}><FaPauseCircle /></a>
            //     )
            // } else {
            //     playButton = (
            //         <a className="track-header-play-icon" onClick={this.handlePlay}><FaPlayCircle /></a>
            //     )
            // }

            if (track.artist) {
                artistName = track.artist
            } else {
                artistName = "Unknown"
            }

            trackShow =  (
            <div className="track-header-container">
                <div className="top-left-ts">
                    {/* {playButton} */}
                    <a className="track-header-play-icon" onClick={this.handlePlay}><FaPlayCircle /></a>
                    <div className="track-text-show-container">
                        <h1 className="track-artist-show">{artistName}</h1>
                        <h1 className="track-title-show">{track.title} {track.email}</h1>
                    </div>
                </div>
                <audio id="track-file" src={track.songUrl} alt={track.title} />
                <img className="track-artwork" src={track.photoUrl} alt={track.title} />
            </div>
            )

        } else {
            trackShow = null
        }
    

        return (
            <div>
                <NavBar /> 
                <div className="track-show-container">
                    <div className="track-show-subcontainer">
                        {trackShow}
                        {/* <div id="waveform"></div> */}
                        <div className="main-body-ts">
                            <div className="ts-container-left">
                                <div className="under-ts-header">
                                    <ul className="left-h-ts">
                                        <li><button><FaHeart size={9} />Like</button></li>
                                        <li><button><FaRedo size={9} />Repost</button></li>
                                        <li><button><FaShareSquare size={9} />Share</button></li>
                                        <li><button><FaPlus size={9} />Add to Next up</button></li>
                                    </ul>
                                    <ul className="right-h-ts">
                                        <li><button><FaHeart size={9} />1,456</button></li>
                                        <li><button><FaRedo size={9} />241</button></li>
                                    </ul>
                                </div>
                                <div className="main-ts-bottom">
                                    {trackArtistBlock}
                                </div>
                            </div>
                            <div className="ts-main-right-container">
                                <div className="ad-container">
                                    <img className="gif-ad" src="https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif" alt=""/>
                                    <h2 className="ad-text">
                                        Waddle to new music NOW on Boom
                                    </h2>
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
            </div>
        )
    }
}

export default TrackShow;