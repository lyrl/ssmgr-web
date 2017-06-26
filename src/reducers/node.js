import {
  NODE_LIST_LOAD,
  NODE_LIST_UNLOAD,
  NODE_LIST_REFRESH
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
    case NODE_LIST_REFRESH:
      return {
        ...state,
        nodes: null,
        need_refresh: true
      };
  }

  return state;
};
