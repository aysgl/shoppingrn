import {createSlice} from '@reduxjs/toolkit';
import {postLogin, postRegister} from './authAction';

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    auth: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(postLogin.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.auth = action.payload;
      })
      .addCase(postRegister.pending, state => {
        state.isLoading = true;
      })
      .addCase(postRegister.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const newUser = action.payload;
        const isUserExist = state.auth.some(user => user.id === newUser.id);

        if (!isUserExist) {
          state.auth.push(newUser);
        }
      });
  },
});

export default authSlice.reducer;
// export const {clearFilters} = categoriesSlice.actions;
