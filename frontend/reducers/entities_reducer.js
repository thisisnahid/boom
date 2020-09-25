import { combineReducers } from 'redux';
import usersReducer from './entities_reducers/users_reducer';
import tracksReducer from './entities_reducers/tracks_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    tracks: tracksReducer
});

export default entitiesReducer;