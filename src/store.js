import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import user from './reducers/user';
import node from './reducers/node';
import logger from 'redux-logger'


const reducer = combineReducers({
  auth,
  common,
  home,
  user,
  node
});

const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware, logger);

const store = createStore(reducer, middleware);

export default store;
