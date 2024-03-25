import {configureStore} from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import productsSlice from './productsSlice';
import cartsSlice from './cartsSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
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
