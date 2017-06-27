import agent from './agent';
import {NOTIFIER_NOTIFICATION, ASYNC_START, ASYNC_END} from './constants/actionTypes';

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    action.payload.then(
      res => {
        console.log('res: ' + JSON.stringify(res));
        action.payload = res;

        store.dispatch(action);

        store.dispatch({ type: ASYNC_END});
      },
      error => {
        console.log('eror: ' + JSON.stringify(error));
        action.error = true;

        if (typeof error.response === 'undefined') {
          store.dispatch({type: NOTIFIER_NOTIFICATION, message: '网络问题，请检查网络连接！', notitype: 'bg-red'});
        } else {
          action.payload = error.response.body;
          store.dispatch(action);

          store.dispatch({type: NOTIFIER_NOTIFICATION, message: `操作失败： ${error.response.status}, ${error.response.body.errors.message}`, notitype: 'bg-red'});
        }

        store.dispatch({ type: ASYNC_END});
      }
    ).catch(err => {
      // store.dispatch({ type: ASYNC_END});
    });

    return;
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

const localStorageMiddleware = store => next => action => {
  if (action.type === 'REGISTER' || action.type === 'LOGIN') {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payload.user.token);
      agent.setToken(action.payload.user.token);
    }
  } else if (action.type === 'LOGOUT') {
    window.localStorage.setItem('jwt', '');
    agent.setToken(null);
  }

  next(action);
};

export {
  localStorageMiddleware,
  promiseMiddleware
};
