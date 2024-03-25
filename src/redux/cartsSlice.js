import {createSlice} from '@reduxjs/toolkit';
import {
  getCarts,
  addToCart,
  deleteCart,
  clearCart,
  updateCartItemQuantity,
} from './cartsAction';

const cartsSlice = createSlice({
  name: 'Carts',
  initialState: {
    carts: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCarts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarts.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.carts = action.payload;
      })
      .addCase(addToCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToCart.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.carts.push(action.payload);
        // const existingCartItemIndex = state.carts.findIndex(
        //   item => item.id === action.payload,
        // );

        // if (existingCartItemIndex !== -1) {
        //   state.carts[existingCartItemIndex].adet += 1;
        // } else {
        //   state.carts.push(action.payload);
        // }
      })
      .addCase(deleteCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteCart.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.carts = state.carts.filter(item => item.id !== action.payload);
      })
      .addCase(clearCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(clearCart.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(clearCart.fulfilled, state => {
        state.isLoading = false;
        state.isError = false;
        state.carts = [];
      })
      .addCase(updateCartItemQuantity.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateCartItemQuantity.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.carts = state.carts.map(item => {
          const {itemId, newQuantity} = action.payload;
          if (item.id === itemId) {
            return {...item, quantity: newQuantity};
          }
          return item;
        });
      });
  },
});

export default cartsSlice.reducer;
// export const {updateCartItemQuantity} = cartsSlice.actions;
