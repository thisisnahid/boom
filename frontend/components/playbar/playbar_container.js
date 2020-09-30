import { connect } from "react-redux";
import { receiveSelectedTrack } from "../../actions/playbar_actions";
import Playbar from "./playbar";

const mapStateToProps = (state) => {
    return {
        tracks: Object.values(state.entities.tracks),
        selectedTrack: state.ui.playbar.selectedTrack
    }
};

const mapDispatchToProps = (dispatch) => ({
    receiveSelectedTrack: (selectedTrack) => dispatch(receiveSelectedTrack(selectedTrack))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
