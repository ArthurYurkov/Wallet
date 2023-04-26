import { createAsyncThunk } from '@reduxjs/toolkit';
import { userPrivateAPI, token } from 'redux/http/http';

export const getUserData = createAsyncThunk(
  'user/getData',
  async (_, thunkAPI) => {
    try {
      const accToken = thunkAPI.getState().auth.token;

      if (accToken) {
        token.set(accToken);
      } else {
        return thunkAPI.rejectWithValue();
      }

      const { data } = await userPrivateAPI.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
