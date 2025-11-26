import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import themeReducer from "../Features/Theme/themeSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        theme : themeReducer,
    }
});