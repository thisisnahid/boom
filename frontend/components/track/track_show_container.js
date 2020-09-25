import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => ({
    track: state.entities.tracks[ownProps.match.params.trackId],
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrack: trackId => dispatch(fetchTrack(trackId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
