import {USER_DELETE} from '../constants/actionTypes';

export default (state = {need_refresh: false}, action) => {
  switch (action.type) {
    case 'USER_LIST_LOAD':
      return {
        ...state,
        users: action.error ? null : action.payload.users,
        need_refresh: false
      };
    case 'USER_LIST_UNLOAD':
      return {
        ...state,
        users: null
      };
    case USER_DELETE:
    case 'USER_LIST_REFRESH':
      return {
        ...state,
        users: null,
        need_refresh: true
      };
    case 'MODIFY_USER_PAGE_LOAD':
      return {
        ...state,
        user: action.payload.user
      }

  }

  return state;
};
