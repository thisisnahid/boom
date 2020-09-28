import { RECEIVE_SELECTED_TRACK, PLAY, PAUSE, RESUME} from '../../actions/playbar_actions';

const defaultState = {
    selectedTrack: null,
    playState: false
}

const playbarReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SELECTED_TRACK:
            nextState.selectedTrack = action.track;
            nextState.playState = true;
            return nextState;
        case PLAY:
            if (state.playState) {
                state.selectedTrack.playState = false;
            }
            return Object.assign(nextState, {
                selectedTrack: action.track,
                playState: true
            });
        case PAUSE:
            return Object.assign(nextState, { playState: false } );
        case RESUME:
            return Object.assign(nextState, { playState: true });
        default:
            return state;
    }
};

export default playbarReducer;