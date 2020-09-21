import { combineReducers } from 'redux';
import session from './session_reducer';
import users from './users_reducer';

const rootReducer = combineReducers({
    session,
    users
});

export default rootReducer;
