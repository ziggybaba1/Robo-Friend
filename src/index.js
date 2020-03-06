import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchRobot, requestRobots } from './reducer'

const loggered = logger;
const rootReducer=combineReducers({searchRobot, requestRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, loggered));
//wrap with provider because of easy pass down of stored state.
ReactDOM.render(
 <Provider store={store}>
    <App />
</Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
