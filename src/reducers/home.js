import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED
} from '../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        statistics: action.payload.statistics
      };
    case HOME_PAGE_UNLOADED:
      return {};
  }

  return state;
};
