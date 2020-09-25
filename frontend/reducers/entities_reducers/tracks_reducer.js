import { RECEIVE_ALL_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../../actions/track_actions';


const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return Object.assign({}, state, action.tracks);
        case RECEIVE_TRACK:
            return Object.assign({}, state, { [action.track.id]: action.track });
        case REMOVE_TRACK:
            let nextState = Object.assign({}, state);
            delete nextState[action.trackId];
            return nextState;
        default:
            return state;
    }
}

export default tracksReducer;