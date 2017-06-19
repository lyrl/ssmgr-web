import {PRODUCT_PAGE_LOADED,PRODUCT_PAGE_UNLOADED} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
      case PRODUCT_PAGE_LOADED:
      return {
          ...state,
          products: action.payload.products
      };

    case PRODUCT_PAGE_UNLOADED:
      return {};
  }
  return state;
};
