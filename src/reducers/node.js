import {
  NODE_LIST_LOAD,
  NODE_LIST_UNLOAD,
  NODE_LIST_REFRESH,
  NODE_DELETE,
  NODE_MODIFY_PAGE_LOAD,
  NODE_MODIFY_CANCEL
} from '../constants/actionTypes';

export default (state = {need_refresh: false}, action) => {
  switch (action.type) {
    case NODE_LIST_LOAD:
      return {
        ...state,
        nodes: action.error ? null : action.payload.nodes,
        need_refresh: false
      };
      case NODE_LIST_UNLOAD:
        return {
            ...state,
            nodes: null
        };
    case NODE_DELETE:
    case NODE_LIST_REFRESH:
      return {
        ...state,
        nodes: null,
        need_refresh: true
      };
    case NODE_MODIFY_PAGE_LOAD:
      return {
        ...state,
        node: action.payload.node
      };
    case NODE_MODIFY_CANCEL:
      return {
          ...state,
          node: null
      }
  }

  return state;
};
