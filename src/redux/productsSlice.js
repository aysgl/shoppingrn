import {createSlice} from '@reduxjs/toolkit';
import {
  addProduct,
  deleteProduct,
  getFavorites,
  getProducts,
  updateFavorite,
  getCategories,
  getProduct,
} from './productsAction';

const productsSlice = createSlice({
  name: 'Products',
  initialState: {
    products: [],
    favorites: [],
    categories: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProducts.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(getProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProduct.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(addProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(addProduct.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products.push(action.payload);
      })
      .addCase(deleteProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = state.products.filter(
          pro => pro.id !== action.payload,
        );
      })
      .addCase(getFavorites.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavorites.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.favorites = action.payload.filter(
          product => product.favorite === true,
        );
      })
      .addCase(updateFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateFavorite.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateFavorite.fulfilled, (state, action) => {
        const updatedProductData = action.payload;
        const updatedProducts = state.products.map(product =>
          product.id === updatedProductData.id ? updatedProductData : product,
        );

        const updatedCategories = state.categories.map(category =>
          category.id === updatedProductData.id ? updatedProductData : category,
        );

        const updatedFavorite = state.favorites.map(favorite =>
          favorite.id === updatedProductData.id ? updatedProductData : favorite,
        );

        return {
          ...state,
          products: updatedProducts,
          categories: updatedCategories,
          favorites: updatedFavorite,
          isLoading: false,
          isError: false,
        };
      })
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategories.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.categories = action.payload;
      });
  },
});

export default productsSlice.reducer;
// export const {clearFilters} = productsSlice.actions;
