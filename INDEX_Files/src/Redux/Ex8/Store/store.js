import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import scoreReducer from '../features/scoreSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    score: scoreReducer,
  },
});