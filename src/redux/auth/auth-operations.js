import { createAsyncThunk } from '@reduxjs/toolkit';
import { token, userPrivateAPI, userPublicAPI } from 'redux/http/http';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkAPI) => {
    try {
      const { data } = await userPublicAPI.post('/auth/sign-up', userData);
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signIn',
  async (userData, thunkAPI) => {
    try {
      const { data } = await userPublicAPI.post('/auth/sign-in', userData);
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  'auth/sighOut',
  async (_, thunkAPI) => {
    try {
      await userPrivateAPI.delete('/auth/sign-out');
      token.unSet();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
