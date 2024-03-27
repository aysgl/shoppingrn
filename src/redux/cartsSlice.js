/* eslint-disable no-shadow */
import {createSlice} from '@reduxjs/toolkit';

const cartsSlice = createSlice({
  name: 'Carts',
  initialState: {
    carts: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload.product;
      const quantityToBeAdded = action.payload.quantity;

      const isProductExist = state.carts.some(
        product => product.id === newProduct.id,
      );

      if (isProductExist) {
        const productIndex = state.carts.findIndex(
          product => product.id === newProduct.id,
        );
        state.carts[productIndex].quantity += quantityToBeAdded;
      } else {
        state.carts.push({
          ...newProduct,
          quantity: quantityToBeAdded,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.carts.find(item => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.carts.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.carts = state.carts.filter(item => item.id !== itemId);
      }
    },
    clearCart: state => {
      state.carts = [];
      state.isLoading = false;
      state.isError = false;
    },
  },
});

export default cartsSlice.reducer;
export const {addToCart, incrementQuantity, decrementQuantity, clearCart} =
  cartsSlice.actions;
