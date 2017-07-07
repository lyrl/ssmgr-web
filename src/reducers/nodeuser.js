import {
  NODE_USER_ADD_MODAL_LOAD,
  NODE_USER_ADD_MODAL_UNLOAD,
  NODE_USER_LIST_LOAD,
  NODE_USER_LIST_UNLOAD,
  NODE_USER_LIST_REFRESH,
  NODE_USER_ADD,
  NODE_USER_DELETE,
  NODE_USER_SUSPEND,
  NODE_USER_RECOVER,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case NODE_USER_LIST_LOAD:
      return {...state, node: action.payload.node, need_refresh: false};
    case NODE_USER_LIST_UNLOAD:
      return {...state, node: null};
    case NODE_USER_LIST_REFRESH:
    case NODE_USER_ADD:
    case NODE_USER_DELETE:
    case NODE_USER_SUSPEND:
    case NODE_USER_RECOVER:
      return {...state, need_refresh: true};
    case NODE_USER_ADD_MODAL_LOAD:
      return {...state, users: action.payload.users};
    case NODE_USER_ADD_MODAL_UNLOAD:
      return {...state, users: null};
  }

  return state;
};
