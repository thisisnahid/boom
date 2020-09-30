import { connect } from "react-redux";
import { receiveSelectedTrack, play, pause, resume } from "../../actions/playbar_actions";
import Playbar from "./playbar";

const mapStateToProps = (state) => {
    return {
        tracks: Object.values(state.entities.tracks),
        selectedTrack: state.ui.playbar.selectedTrack
    }
};

const mapDispatchToProps = (dispatch) => ({
    receiveSelectedTrack: (selectedTrack) => dispatch(receiveSelectedTrack(selectedTrack)),
    // play: () => dispatch(play()),
    // pause: () => dispatch(pause()),
    // resume: () => dispatch(resume())
});

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
