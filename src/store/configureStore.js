import { createStore, applyMiddleware} from 'redux';

import { autoRehydrate,persistStore  } from 'redux-persist';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { logger } from 'redux-logger';

import rootReducer from '../reducers/index'

    const store = createStore(
                    rootReducer,
                    applyMiddleware(
                        thunk,
                        reduxImmutableStateInvariant(),
                        logger
                    ),
                    autoRehydrate()
                    );
    persistStore(store);

export default store;