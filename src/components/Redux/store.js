import fileReducer from '../Redux/reducer'
import {createStore,combineReducers} from 'redux'
const store = createStore(fileReducer)

export default store;