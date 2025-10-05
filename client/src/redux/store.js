// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import { composeWithDevTools } from "redux-devtools-extension";
// import { getProductsReducer } from "./reducers/productReducers.js";

// const reducer = combineReducers({
//   getProducts: getProductsReducer,
// });

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers.js";
import {cartReducer} from "./reducers/cartReducer.js";

const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
  },
});

export default store;
