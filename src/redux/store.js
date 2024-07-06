import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";

const store = configureStore({
  reducer: {
    productData: productSlice,
  },
});

export default store;
