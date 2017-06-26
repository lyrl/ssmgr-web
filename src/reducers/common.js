const defaultState = {
  appName: 'Shadowsocks Management System',
  version: '0.0.1',
  token: null,
  loading: false
};

import {
  USER_ADD,
  USER_ADD_CANCLE,
  USER_MODIFY_CANCEL,
  USER_MODIFY,
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  REGISTER,
  ASYNC_START,
  ASYNC_END,
} from '../constants/actionTypes';

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGOUT:
      return { ...state, redirectTo: '/', token: null, currentUser: null };
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
    case ASYNC_START:
      return { ...state, loading: true};
    case ASYNC_END:
      return { ...state, loading: false};
    case USER_ADD_CANCLE:
    case USER_MODIFY_CANCEL:
        return { ...state, redirectTo: '/users' };
    case USER_ADD:
    case USER_MODIFY:
      return { ...state, redirectTo: action.error ? null : '/users'}
  }

  return state;
};
