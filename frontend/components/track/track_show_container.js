import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import { receiveSelectedTrack } from '../../actions/playbar_actions';
import { fetchUsers } from '../../actions/user_actions'
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    track: state.entities.tracks[ownProps.match.params.trackId],
    selectedTrack: state.ui.playbar.selectedTrack,
    users: state.entities.users,
    songPlaying: state.ui.playbar.songPlaying
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrack: trackId => dispatch(fetchTrack(trackId)),
    receiveSelectedTrack: (selectedTrack) => dispatch(receiveSelectedTrack(selectedTrack)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
