import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from './categoriesAction';

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState: {
    categories: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
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

export default categoriesSlice.reducer;
// export const {clearFilters} = categoriesSlice.actions;
