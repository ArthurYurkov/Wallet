import { createSlice } from '@reduxjs/toolkit';
import {
  createTransactionThunk,
  getAllTransactions,
  getCategories,
} from './transactions-operation';

const TransactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    allTransactions: [],
    createTransaction: null,
    categories: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllTransactions.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.allTransactions = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createTransactionThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createTransactionThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createTransactionThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const transactionsReducer = TransactionsSlice.reducer;
