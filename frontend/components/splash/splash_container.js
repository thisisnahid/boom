import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchAllTracks } from '../../actions/track_actions';
import Splash from './splash';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    tracks: Object.values(state.entities.tracks)
});

const mapDispatchToProps = (dispatch) => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);