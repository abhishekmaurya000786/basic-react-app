// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';   // importing reducer

// Creating the central store (CASE-SENSITIVE imports)
export const store = configureStore({
  reducer: {
    counter: counterReducer,   // registering slice reducer
  },
});