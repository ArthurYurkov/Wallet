import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from './user-operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getUserData.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userData = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const userReducer = userSlice.reducer;
