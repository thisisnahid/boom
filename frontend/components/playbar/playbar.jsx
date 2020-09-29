import React from 'react';
import {
    IoMdSkipBackward, IoMdPlay, IoMdPause, IoMdSkipForward, 
    IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff} from 'react-icons/io';

class Playbar extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { songPlaying: this.props.playstate }
        this.state = { songPlaying: false, muted: false, currentVolume: 1.0, volumeBar: false }
        this.audioTag = React.createRef();
        this.handleVolume = this.handleVolume.bind(this);
        this.volumeBar = this.volumeBar.bind(this);
        this.volumeMute = this.volumeMute.bind(this);
    }

    // componentDidMount() {
    //     const song = document.getElementById("track-file");
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.songPlaying !== this.props.songPlaying) {
            this.props.songPlaying ? this.audioTag.current.play() : this.audioTag.current.pause();
        }
        if (prevProps.selectedTrack !== this.props.selectedTrack) this.audioTag.current.play();
    }

    handleVolume(e) {
        const audioTag = document.getElementById("track-file")
        const updatedVolume = e.target.value;
        audioTag.muted = false;
        audioTag.volume = updatedVolume;
        this.setState({ currentVolume: updatedVolume, muted: false, volumeBar: false})
    }

    volumeBar() {
        if (this.state.volumeBar) {
            this.setState({ volumeBar: false });
        } else {
            this.setState({ volumeBar: true });
        }
    }

    volumeMute() {
        if (this.audioTag.current.muted) {
            this.audioTag.current.muted = false;
            this.setState({ muted: false, currentVolume: this.audioTag.current.volume });
        } else {
            this.audioTag.current.muted = true;
            this.setState({ muted: true, currentVolume: 0 });
        }
    }

    togglePlay() {
        // debugger
        if (this.state.songPlaying) {
            this.audioTag.current.pause();
        } else {
            this.audioTag.current.play();
        }
        this.setState({ songPlaying: !this.state.songPlaying })
    }   
        
    render() {
        const { selectedTrack, tracks, playState, play, pause, resume, receiveSelectedTrack } = this.props;
        const trackTitle = this.props.selectedTrack ? selectedTrack.title : null;
        let playButton, volumeButton;
        
        if (this.state.songPlaying) {
            playButton = (
                <button onClick={() => this.togglePlay()} className="play-toggle"><IoMdPause  /></button>
            );
        } else {
            playButton = (
                <button onClick={() => this.togglePlay()} className="pause-toggle"><IoMdPlay /></button>
            );
        }
        if (!selectedTrack) return null 


        if (this.state.currentVolume == 0) {
            volumeButton = (
                 <IoMdVolumeOff /> );
        } else if (this.state.currentVolume > 0.5) {
            volumeButton = (
                 <IoMdVolumeHigh /> );
        } else if (this.state.currentVolume <= 0.5) {
            volumeButton = (
                 <IoMdVolumeLow /> );
        }
    
        return (
            <div className={`playbar-container ${selectedTrack ? "revealed" : "hidden"}`}>
                <div className="playbar-sub-container">
                    <div className="playbar-left-buttons">
                        <audio id="track-file" ref={this.audioTag} src={selectedTrack.songUrl} alt={selectedTrack.title} />
                        <IoMdSkipBackward />
                        {/* <a className="button-toggleplay" onClick={() => this.togglePlay()}>{this.togglePlayButton()}</a> */}
                        {playButton}
                        <IoMdSkipForward />
                        
                    </div>
                    <div className="playbar-right-buttons">
                        <div className="volume-button" onMouseEnter={this.volumeBar} onMouseLeave={this.volumeBar}>
                            <button onClick={this.volumeMute}>{volumeButton}</button>
                            <div className={`volume-container ${this.state.volumeControl ? "" : "hidden"}`}>
                                <div className="volume-subcontainer">
                                    <input type="range" step="any" min="0.0" max="1.0" 
                                        value={this.state.muted ? 0 : this.state.currentVolume} onChange={this.handleVolume}
                                    />
                                </div>
                            </div>
                        </div>    
                    </div>

                </div>

            </div>
        )
    }
}

export default Playbar;