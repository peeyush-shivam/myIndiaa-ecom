import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return { cart, wishlist };
  } catch (e) {
    return { cart: [], wishlist: [] };
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const initialState = loadStateFromLocalStorage();

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let tempCart = [...state.cart, action.payload];
      const newState = {
        ...state,
        cart: tempCart,
      };
      saveStateToLocalStorage(newState);
      return newState;
    },
    removeFromCart: (state, action) => {
      let tempCart = [...state.cart];
      let index = tempCart.findIndex((item) => item?.id === action.payload);
      tempCart.splice(index, 1);
      const newState = {
        ...state,
        cart: tempCart,
      };
      saveStateToLocalStorage(newState);
      return newState;
    },
    addToWishlist: (state, action) => {
      let tempWishlist = [...state.wishlist, action.payload];
      const newState = {
        ...state,
        wishlist: tempWishlist,
      };
      saveStateToLocalStorage(newState);
      return newState;
    },
    removeFromWishlist: (state, action) => {
      let tempWishlist = [...state.wishlist];
      let index = tempWishlist.findIndex((item) => item?.id === action.payload);
      tempWishlist.splice(index, 1);
      const newState = {
        ...state,
        wishlist: tempWishlist,
      };
      saveStateToLocalStorage(newState);
      return newState;
    },
    moveAllToCart: (state, action) => {
      let tempCart = [...state.cart, ...state.wishlist];
      const newState = {
        ...state,
        cart: tempCart,
        wishlist: [],
      };
      saveStateToLocalStorage(newState);
      return newState;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  moveAllToCart,
} = productSlice.actions;
export default productSlice.reducer;
