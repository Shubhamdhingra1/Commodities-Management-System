import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        ...action.payload.user,
        avatar: action.payload.user.avatar || null,
      };
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.role = action.payload.user.role;
    },
    updateProfile: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer; 