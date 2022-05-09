import { combineReducers } from 'redux';
import chatInputReducer from './chatInputReducer';
 
const rootReducer = combineReducers({
    chatInputReducer
});
 
export default rootReducer;