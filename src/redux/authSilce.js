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
    const response = await customAxios.post('/api/v1/users/signup', userData);
    dispatch(setUser(response.data.user));
  } catch (error) {
    if (error.response && error.response.data.message === 'User already exists') {
      throw new Error('Email already exists. Please use a different email.');
    } else {
      throw new Error('An error occurred during registration.');
    }
  }
};

// Async action for user login
export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await customAxios.post('/api/v1/users/login', userData);

    // Store the user token in localStorage
    localStorage.setItem('userToken', response.data.token);

    dispatch(setUser(response.data.user));
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid email or password. Please try again.');
    } else {
      throw new Error('An error occurred during login.');
    }
  }
};

export default authSlice.reducer;
