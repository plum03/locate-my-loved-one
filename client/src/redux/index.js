import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import auth from "./authorization";

const rootReducer = combineReducers({ auth })


export default createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk))