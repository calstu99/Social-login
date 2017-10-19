import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './reducer';
import todoReducer from './todoReducer';
import { firebaseStateReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    todo:todoReducer,
    routing: routerReducer,
    firebase: firebaseStateReducer
});

export default rootReducer;
