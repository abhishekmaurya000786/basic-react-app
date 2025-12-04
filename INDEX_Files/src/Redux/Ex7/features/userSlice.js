import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
);




export const productSlice = createSlice({
    name: "products",
    initialState:{
        data: null,
        status:"idle",
        message:"",
    },
    reducers:{
        setMessage: ()=>{
            state.message = action.payload;
        },

        clearMessage: ()=>{
            state.message = "";
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(, reducer)
    }
});