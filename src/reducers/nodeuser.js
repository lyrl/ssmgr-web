import {
  USER_LIST_UNLOAD,
  NODE_USER_LIST_LOAD,
  NODE_USER_LIST_UNLOAD,
  NODE_USER_LIST_REFRESH
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case NODE_USER_LIST_LOAD:
      return {...state, node: action.payload.node, need_refresh: false};
    case NODE_USER_LIST_UNLOAD:
      return {...state, node: null};
    case NODE_USER_LIST_REFRESH:
      return {...state, need_refresh: true}
  }

  return state;
};
