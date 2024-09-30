import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const saveToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resetHeaders = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const fetchUserSignup = createAsyncThunk(
  'user/fetchUserSignup',
  async (_, thunkAPI) => {
    const BASE_URL = 'https://connections-api.goit.global';
    const END_POINT = '/users/signup';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url);
      saveToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserLogin = createAsyncThunk(
  'user/fetchUserLogin',
  async (userData, thunkAPI) => {
    const BASE_URL = 'https://connections-api.goit.global';
    const END_POINT = '/users/login';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url, userData);
      saveToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserLogout = createAsyncThunk(
  'user/fetchUserLogout',
  async (userData, thunkAPI) => {
    const BASE_URL = 'https://connections-api.goit.global';
    const END_POINT = '/users/logout';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url);
      resetHeaders();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchrefreshUser = createAsyncThunk(
  'user/fetchrefresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null)
      return thunkAPI.rejectWithValue('User not authorized');

    try {
      saveToken(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
