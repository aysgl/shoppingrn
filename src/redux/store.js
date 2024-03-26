import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartsSlice from './cartsSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    carts: cartsSlice,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
