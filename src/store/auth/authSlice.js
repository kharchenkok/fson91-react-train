import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  refreshThunk,
  registerThunk,
  updateProfileThunk,
} from './thunks';

const handleAuth = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: null,
  },
  reducers: {
    logOut: state => {
      state.token = '';
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleAuth)
      .addCase(loginThunk.fulfilled, handleAuth)
      .addCase(refreshThunk.fulfilled, handleAuth)
      .addCase(updateProfileThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
