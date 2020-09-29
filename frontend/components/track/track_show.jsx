import React from 'react';
import NavBar from '../navbar/navbar_container';
import { FaPlayCircle } from 'react-icons/fa';

class TrackShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.track
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
    }

    render() {
        const { track } = this.props;
        
        let trackShow;
        if (track) { 

            let artistName;
            if (track.artist) {
                artistName = track.artist
            } else {
                artistName = "Unknown"
            }

            trackShow =  (
            <div className="track-header-container">
                <div className="top-left-ts">
                    <a className="track-header-play-icon" onClick={() => this.props.receiveSelectedTrack(track)}><FaPlayCircle /></a>
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
        };

        return (
            <div>
                <NavBar /> 
                <div className="track-show-container">
                    <div className="track-show-subcontainer">
                        {trackShow}
                    </div>
                 </div>
            </div>
        )
    }
}

export default TrackShow;