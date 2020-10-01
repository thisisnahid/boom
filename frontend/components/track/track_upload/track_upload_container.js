import { connect } from "react-redux";
import { createTrack } from '../../../actions/track_actions';
import TrackUpload from './track_upload';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
    uploadTrack: (track) => dispatch(createTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackUpload);
