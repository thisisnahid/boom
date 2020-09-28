import React from 'react';
import {
    IoMdSkipBackward, IoMdPlay, IoMdPause, IoMdSkipForward, 
    IoMdVolumeHigh, GoHeart, MdPlaylistPlay
} from 'react-icons/io';

class Playbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { songPlaying: this.props.playstate }
        this.audioTag = React.createRef();
    }
    
    togglePlay() {
        // debugger
        if (this.state.songPlaying) {
            // this.props.selectedTrack.pause();
            this.audioTag.current.pause();
        } else {
            this.audioTag.current.play();
            // this.props.resume();
        }
        this.setState({ songPlaying: !this.state.songPlaying })
    }
    
    togglePlayButton() {
        if (this.props.playState) {
            return (
                <button onClick={() => this.togglePlay} className="play-toggle"><IoMdPause  /></button>
            );
        } else {
            return (
                <button onClick={() => this.togglePlay} className="pause-toggle"><IoMdPlay /></button>
            );
        }
    }


    render() {
        const { selectedTrack, tracks, playState, play, pause, resume, receiveSelectedTrack } = this.props;
        // debugger
        const trackTitle = this.props.selectedTrack ? selectedTrack.title : null;

        if (!selectedTrack) return null 

        return (
            <div className={`playbar-container ${selectedTrack ? "revealed" : "hidden"}`}>
                <div className="playbar-sub-container">
                    <div className="playbar-left-buttons">
                        <audio id="track-file" ref={this.audioTag} src={selectedTrack.songUrl} alt={selectedTrack.title} />
                        <IoMdSkipBackward />
                        <a className="button-toggleplay" onClick={() => this.togglePlay()}>{this.togglePlayButton()}</a>
                        <IoMdSkipForward />
                        
                    </div>
                    <div className="playbar-right-buttons">
                        <ul>
                            <li><IoMdVolumeHigh /></li>
                            {/* <li><GoHeart /></li> */}
                            {/* <li><MdPlaylistPlay /></li> */}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}

export default Playbar;