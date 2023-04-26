import { createAsyncThunk } from '@reduxjs/toolkit';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

import { userPrivateAPI } from 'redux/http/http';

export const getAllTransactions = createAsyncThunk(
  'transactions/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await userPrivateAPI.get('/transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'categories/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await userPrivateAPI.get('/transaction-categories');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTransactionThunk = createAsyncThunk(
  'transactions/post',
  async (data, thunkAPI) => {
    try {
      await userPrivateAPI.post('/transactions', data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
