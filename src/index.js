import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { signUp } from './actions/signUpAction';
import store from './store/configureStore'
import  routes from './routes';
import { createStore } from 'redux';

persistStore(store, {}, () => {
ReactDOM.render(
    <Provider
        store={ store }>
     <Router history={ browserHistory } routes={ routes }></Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
})