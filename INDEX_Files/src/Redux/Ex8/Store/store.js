import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import settingReducer from '../features/settingsSlice';
// import { userSlice } from '../features/userSlice';

export const store = configureStore({
    reducer:{
        settings : settingReducer,
        user : userReducer,  // user: userSlice.reducer, // both are same effect
    }
});