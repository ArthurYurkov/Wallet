import { createSlice } from '@reduxjs/toolkit';
import { signInThunk, signOutThunk, signUpThunk } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(signInThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(signOutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.isLoggedIn = false;
        state.user = {};
      })
      .addCase(signOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
