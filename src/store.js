import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import product from './reducers/product';
import logger from 'redux-logger'


const reducer = combineReducers({
  auth,
  common,
  home,
  product
});

const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware, logger);

const store = createStore(reducer, middleware);

export default store;
