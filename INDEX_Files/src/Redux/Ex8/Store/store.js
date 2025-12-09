import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import scoreReducer from './scoreSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    score: scoreReducer,
  },
});