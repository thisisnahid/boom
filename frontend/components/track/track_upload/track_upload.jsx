import React from 'react';
import NavBar from '../../navbar/navbar_container'

class TrackUpload extends React.Component {

    render() {
        return(
            <div>
                <NavBar />
                <div className="track-upload-container">
                    <div className="track-upload-subcontainer">
                        <div className="track-upload-form-container">
                            <h1 className="drag-h1">Drag and drop your tracks {`&`} albums here</h1>
                            <button className="choose-files-button"><a>or choose files to upload</a></button>
                            <div className="playlist-check-container">
                                <input type="checkbox" id="playlist-tu" name="playlist-tu" value="Yes"></input>
                                <label htmlFor="playlist-tu"> Make a playlist when multiple files are selected</label>
                            </div>
                            <div className="radio-priv-pub">
                                <h2 className="priv-buttons">Privacy:</h2>
                                <input type="radio" id="public" className="priv-buttons" name="public" value="public"></input>
                                <label htmlFor="public" className="priv-buttons">Public</label>
                                <input type="radio" id="private" className="priv-buttons" name="private" value="private"></input>
                                <label htmlFor="private" className="priv-buttons">Private</label>
                            </div>
                            <div className="file-type-text-container">
                                <h1 className="file-type-text">Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.</h1>
                                <a href="">Learn more about lossless HD.</a>
                            </div>
                        </div>
                        <div className="under-upload-form-container">
                            <h1 className="terms-text">By uploading, you confirm that you don't infringe anyone else's rights.</h1>
                            <div className="tu-footer-container">
                                <ul className="tu-footer-links">
                                    <li><a href="https://github.com/thisisnahid/boom/">Github - </a></li>
                                    <li><a href="https://www.linkedin.com/in/nahid-siddiqui-73179ba9/"> LinkedIn - </a></li>
                                    <li><a href="https://groomarts.com/assets/images/_listItem/cute-puppy-1.jpg"> Puppy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackUpload;