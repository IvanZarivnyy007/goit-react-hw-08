import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const BASE_URL = 'https://66cf28ab901aab248421245c.mockapi.io';
    const END_POINT = '/contacts';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userData, thunkAPI) => {
    const BASE_URL = 'https://66cf28ab901aab248421245c.mockapi.io';
    const END_POINT = '/contacts';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url, userData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (X, thunkAPI) => {
    const BASE_URL = 'https://66cf28ab901aab248421245c.mockapi.io';
    const END_POINT = `/contacts/${X}`;
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
