import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import auth from "./authorization"
import searchResults from "./search"

const rootReducer = combineReducers({ auth, searchResults })


export default createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk))