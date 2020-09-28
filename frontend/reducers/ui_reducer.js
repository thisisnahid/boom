import { combineReducers } from 'redux';
import modalReducer from './ui_reducers/modal_reducer';
import playbarReducer from './ui_reducers/playbar_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    playbar: playbarReducer
});

export default uiReducer;