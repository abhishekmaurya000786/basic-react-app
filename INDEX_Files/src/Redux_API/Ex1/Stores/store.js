import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Stores/Slices/counterSlice'
import {productApi} from '../Stores/API/productApi'

export const store = configureStore({
    reducer : {
        counter: counterReducer,

        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});