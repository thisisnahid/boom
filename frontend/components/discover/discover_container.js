import { connect } from 'react-redux';
import Discover from './discover'
import { fetchAllTracks } from '../../actions/track_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
    // tracks: Object.values(state.entities.tracks),
    tracks: state.entities.tracks,
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAllTracks:() => dispatch(fetchAllTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);