import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../../actions/follow_actions';

const followsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FOLLOW:
            return Object.assign({}, state, { [action.follow.id]: action.follow });
        case REMOVE_FOLLOW:
            let nextState = Object.assign({}, state);
            delete nextState[action.followId];
            return nextState;
        default:
            return state;
    }
}

export default followsReducer;