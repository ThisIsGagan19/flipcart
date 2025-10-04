import * as actionTypes from "../constants/productConstants.js";

export const getProductsReducer = (
  state = { products: [], error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case actionTypes.GET_PRODUCTS_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
