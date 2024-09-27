import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUserLogin,
  fetchUserSignup,
  fetchUserLogout,
  fetchrefreshUser,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUserLogout.fulfilled, (state, action) => {
        state.user = {
          name: '',
          email: '',
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUserSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(fetchrefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(fetchrefreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(fetchrefreshUser.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(fetchUserLogin.pending, handlePending)
      .addCase(fetchUserLogin.rejected, handleRejected)

      .addCase(fetchUserLogout.pending, handlePending)
      .addCase(fetchUserLogout.rejected, handleRejected)

      .addCase(fetchUserSignup.pending, handlePending)
      .addCase(fetchUserSignup.rejected, handleRejected);
  },
});

export default authSlice.reducer;
