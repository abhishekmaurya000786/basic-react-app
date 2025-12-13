import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        message: "",
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addMatcher((action)=>{
            return action.type.endsWith("./rejected");
        }, (state,action)  =>{
            state.message = action.error?.message || "Unknown error occurred"; // this line means if action.error.message exists, use it; otherwise, use "Unknown error occurred"
        })
        .addMatcher((action)=>{
            action.type.endsWith("/fulfilled")
        }, (state)=>{
            state.message = "";
        });
    }
});

export default errorSlice.reducer;