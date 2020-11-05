import { combineReducers } from 'redux';
import usersReducer from './entities_reducers/users_reducer';
import tracksReducer from './entities_reducers/tracks_reducer';
import followsReducer from './entities_reducers/follows_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    tracks: tracksReducer,
    follows: followsReducer
});

export default entitiesReducer;