import { connect } from 'react-redux';
import Discover from './discover'
import { fetchAllTracks } from '../../actions/track_actions';
import { fetchUsers } from '../../actions/user_actions';
import { receiveSelectedTrack, play, pause, resume } from "../../actions/playbar_actions";

const mapStateToProps = (state) => ({
    // tracks: Object.values(state.entities.tracks),
    tracks: state.entities.tracks,
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.entities.users),
    selectedTrack: state.ui.playbar.selectedTrack || (Object.values(state.entities.tracks))[2]
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAllTracks:() => dispatch(fetchAllTracks()),
    receiveSelectedTrack: (selectedTrack) => dispatch(receiveSelectedTrack(selectedTrack)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);