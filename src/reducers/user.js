export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_LIST_LOAD':
      return {
        ...state,
        users: action.error ? null : action.payload.users
      };
      case 'USER_LIST_UNLOAD':
        return {
            ...state,
            users: null
        }
  }

  return state;
};
