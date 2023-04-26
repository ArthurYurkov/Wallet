import { createSlice } from '@reduxjs/toolkit';
import { getCurrencyMono } from './currency-operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencyResp: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getCurrencyMono.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrencyMono.fulfilled, (state, action) => {
        state.currencyResp = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrencyMono.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const currencyReducer = currencySlice.reducer;
