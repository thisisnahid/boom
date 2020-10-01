import React from 'react';
import { Link } from 'react-router-dom';
import {
    IoMdSkipBackward, IoMdPlay, IoMdPause, IoMdSkipForward, 
    IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff, IoMdHeart, IoMdMenu } from 'react-icons/io';

class Playbar extends React.Component {
    constructor(props) {
        super(props);
        this.audioTag = React.createRef();
        this.state = { 
            songPlaying: true, 
            muted: false, 
            currentVolume: 1.0, 
            volumeBar: false, 
            currentTime: 0, 
            songLength: 0 }
        this.togglePlay = this.togglePlay.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.volumeBar = this.volumeBar.bind(this);
        this.volumeMute = this.volumeMute.bind(this);
        this.formatElapsedTime = this.formatElapsedTime.bind(this);
        this.playbarUpdate = this.playbarUpdate.bind(this);
        this.playbarTime = this.playbarTime.bind(this);
        this.handlePreviousSong = this.handlePreviousSong.bind(this);
        this.handleNextSong = this.handleNextSong.bind(this);
    }
    
    // componentWillUnmount() {
    //     clearInterval(this.timeInterval);
    // }

    
    componentDidUpdate(prevProps) {
        if (prevProps.songPlaying !== this.props.songPlaying) {
            this.props.songPlaying ? this.audioTag.current.play() : this.audioTag.current.pause();
        }
        if (prevProps.selectedTrack !== this.props.selectedTrack) this.audioTag.current.play();
        this.interval = setInterval(this.playbarUpdate, 400);
    }

    handleVolume(e) {
        e.stopPropagation();
        const audioTag = this.audioTag.current;
        const updatedVolume = e.target.value;
        audioTag.muted = false;
        audioTag.volume = updatedVolume;
        this.setState({ currentVolume: updatedVolume, muted: false})
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

    handlePreviousSong() {
        const { tracks, selectedTrack, receiveSelectedTrack } = this.props;
        let i = tracks.indexOf(selectedTrack);
        let prevSongIdx;
        if (i == 0) { 
            prevSongIdx = tracks.length - 1;
        } else { 
            prevSongIdx = i - 1;
        }
        if (this.audioTag.current.currentTime >= 7) {
            this.audioTag.current.currentTime = 0;
        } else {
            receiveSelectedTrack(tracks[prevSongIdx]);
        }
    }

    togglePlay() {
        // debugger
        // console.log(this.audioTag.current.currentTime)
        if (this.state.songPlaying) {
            this.audioTag.current.pause();
        } else {
            this.audioTag.current.play();
        }
        this.setState({ songPlaying: !this.state.songPlaying })
    }   

    handleNextSong() {
        const { selectedTrack, receiveSelectedTrack, tracks, } = this.props;
        let nextIdx;
        let i = tracks.indexOf(selectedTrack);
        if (i == tracks.length - 1) {
            nextIdx = 0;
        } else {
            nextIdx = (i + 1)
        }
        receiveSelectedTrack(tracks[nextIdx]);
    }


    playbarUpdate() {
        if (!this.props.selectedTrack) return null;
        this.setState({ currentTime: this.audioTag.current.currentTime, songLength: this.audioTag.current.duration});
    }

    formatElapsedTime(seconds) {
        let resultMinutes, resultSeconds;
        let startMinutes = Math.floor(seconds / 60);
        let startSeconds = Math.floor(seconds) % 60;
        
        if (startMinutes < 60) {
            resultMinutes = startMinutes; 
        } else {
            resultMinutes = 0;
        }

        if (startSeconds < 10) {
            resultSeconds = `:0${startSeconds}`;
        } else {
            resultSeconds = `:${startSeconds}`;
        }

        if (resultMinutes < 10) {
            resultMinutes = `0${resultMinutes}`;
        } else {
            resultMinutes = `${resultMinutes}`;
        }
        return (resultMinutes + resultSeconds);
    }
    
    playbarTime(e) {
        if (this.audioTag.current) {
        this.audioTag.current.currentTime = e.target.value;
        this.setState({ currentTime: e.target.value });
        }
    }
        
    render() {
        const { selectedTrack } = this.props;
        const trackTitle = this.props.selectedTrack ? selectedTrack.title : null;
        const trackImg = this.props.selectedTrack ? selectedTrack.photoUrl : null;
        const trackArtist = this.props.selectedTrack ? selectedTrack.artist : null;
        let playButton, volumeButton, duration;
        
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
            volumeButton = ( <IoMdVolumeOff /> );
        } else if (this.state.currentVolume > 0.5) {
            volumeButton = ( <IoMdVolumeHigh /> );
        } else if (this.state.currentVolume <= 0.5) {
            volumeButton = ( <IoMdVolumeLow /> );
        }

        if (this.audioTag.current) {
            duration = this.audioTag.current.songLength;
        } else {
            duration = 0;
        }

        return (
            <div className="playbar-container">
                <div className="playbar-sub-container">
                    <div className="playbar-left-buttons">
                        <audio id="track-file" ref={this.audioTag} src={selectedTrack.songUrl} alt={selectedTrack.title} />
                        <button className="prev-button" onClick={this.handlePreviousSong}><IoMdSkipBackward /></button>
                        {playButton}
                        <button className="next-button" onClick={this.handleNextSong}><IoMdSkipForward /></button>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <a className="start-time">{this.formatElapsedTime(this.state.currentTime)}</a>
                            <input type="range" className="progress-bar-input" onChange={this.playbarTime} min="0" max={this.state.songLength} step="1" />
                            <a className="end-time">{this.formatElapsedTime(this.state.songLength)}</a> 
                            <div className="outer-music-bar">
                                <div className="inner-music-bar" style={{ width: `${100 * (this.state.currentTime / this.state.songLength) || 1}%` }}></div>
                                <div className="progress-ball" style={{ left: `${100 * (this.state.currentTime / this.state.songLength) || 1}%` }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="playbar-right-buttons">
                        <div className="volume-container" onMouseOver={this.volumeBar} onMouseOut={this.volumeBar}>
                            <button className="volume-button" onClick={this.volumeMute}>{volumeButton}</button>
                            <div className={`volumebar-container-${this.state.volumeBar ? "revealed" : "hidden"}`}>
                                <div className="volumebar-outmost">
                                    <input type="range" className="volume-input" step="any" min="0.0" max="1.0" 
                                        value={this.state.muted ? 0 : this.state.currentVolume} onChange={this.handleVolume}/>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="track-info-container">
                        <img className="playbar-track-pic" src={trackImg} alt="playbar-track-pic" />
                        <div className="playbar-track-info">    
                            <Link to={`/users/${selectedTrack.artist_id}`}><h2>{trackArtist}</h2></Link>
                            <Link to={`/tracks/${selectedTrack.id}`}><h1>{trackTitle}</h1></Link>
                        </div>
                    </div>
                    <button className="heart-button">< IoMdHeart /></button>
                    <button className="pl-button"><IoMdMenu /></button>
                </div>
            </div>
        )
    }
}

export default Playbar;