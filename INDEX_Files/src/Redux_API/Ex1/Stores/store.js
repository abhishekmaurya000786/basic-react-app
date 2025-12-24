import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Stores/Slices/counterSlice'
import {productApi} from '../Stores/API/productApi'

export const store = configureStore({
    reducer : {
        counter: counterReducer,

        [productApi.reducerpath]:productApi.reducer,

    }
});