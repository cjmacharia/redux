import { combineReducers } from 'redux';
import bucketReducer from './bucketsReducer';
import itemReducer from './itemsReducer';
import registerReducer from './registerReducer'
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    bucketReducer,
    itemReducer,
    registerReducer,
    loginReducer
});

export default rootReducer