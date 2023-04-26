import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrencyMono = createAsyncThunk(
  `currency/get`,
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('https://api.monobank.ua/bank/currency');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
