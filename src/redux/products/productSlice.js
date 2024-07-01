import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
