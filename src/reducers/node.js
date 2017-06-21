export default (state = {}, action) => {
  switch (action.type) {
    case 'NODE_LIST_LOAD':
      return {
        ...state,
        nodes: action.error ? null : action.payload.nodes
      };
      case 'NODE_LIST_UNLOAD':
        return {
            ...state,
            nodes: null
        }
  }

  return state;
};
