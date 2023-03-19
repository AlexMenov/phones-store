import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  user: { user_name: "noName", user_id: " " },
  isAuthenticated: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    },
    resetStore: (state, action) => {
      return {
        ...state,
        products: [],
      };
    },
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, quantity: 1 });
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const { id, ...updates } = action.payload;
      const productToUpdate = state.products.find(
        (product) => product.id === id
      );
      if (productToUpdate) {
        Object.assign(productToUpdate, updates);
      }
    },
    incrementQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product.id === action.payload
      );
      if (productToIncrement) {
        productToIncrement.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const productToDecrement = state.products.find(
        (product) => product.id === action.payload
      );
      if (productToDecrement) {
        if (productToDecrement.quantity === 1) {
          state.products = state.products.filter(
            (product) => product.id !== action.payload
          );
        } else {
          productToDecrement.quantity--;
        }
      }
    },
  },
});

export const {
  addUser,
  resetStore,
  addProduct,
  deleteProduct,
  updateProduct,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

export const totalPrice = (state) =>
  state.product.products.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

export const totalQuantity = (state) =>
  state.product.products
    ? state.product.products.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0)
    : 0;

export default productSlice.reducer;
