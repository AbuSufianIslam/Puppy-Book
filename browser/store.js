import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const loggerMiddleware = createLogger();
const middlewares = applyMiddleware(loggerMiddleware, thunkMiddleware);
const store = createStore(rootReducer, middlewares);

export default store;
