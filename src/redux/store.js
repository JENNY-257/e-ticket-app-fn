// index.js in the redux folder
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSilce.js';


const store = configureStore({
  reducer: {
    auth: authReducer,
   
  },
});

export default store;
