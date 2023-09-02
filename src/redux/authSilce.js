// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import customAxios from "./customAxios.js";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError } = authSlice.actions;

// Async action for user registration
export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await customAxios .post('/api/v1/users/signup', userData);
    dispatch(setUser(response.data.user));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
};

// Async action for user login
export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await customAxios .post('/api/v1/users/login', userData);
    dispatch(setUser(response.data.user));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
};

export default authSlice.reducer;
