import { combineReducers } from 'redux';
import subscription from './subscription'


const rootReducer = combineReducers({
    subscription: subscription,
})


export default rootReducer;
