import { combineReducers } from 'redux';
import bucketReducer from './bucketsReducer';
import registerReducer from './registerReducer'
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    bucketReducer,
    registerReducer,
    loginReducer
});

export default rootReducer