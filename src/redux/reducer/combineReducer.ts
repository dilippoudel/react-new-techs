import {combineReducers} from 'redux';
import countryReducer from './countryReducer'

const makeRootReducer = () => 
combineReducers({countryReducer})

export default makeRootReducer