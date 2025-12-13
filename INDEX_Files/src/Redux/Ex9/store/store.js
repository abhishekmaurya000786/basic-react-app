import { configureStore } from "@reduxjs/toolkit";
import {taskReducer} from '../features/taskSlice'
import {errorReducer} from '../features/errorSliceManager';
import {profileReducer} from '../features/taskSlice';

export const store = configureStore({
    reducer : {
        tasks : taskReducer,
        errors : errorReducer,
        profile : profileReducer,
    }
});