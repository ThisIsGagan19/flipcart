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

export const getProductDetailsReducer = (
  state = { product: {}, loading: true, error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return { ...state, product: action.payload, loading: false };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return { ...state, error: action.payload, loading: false };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return { product: {}, loading: true, error: null };
    default:
      return state;
  }
};
