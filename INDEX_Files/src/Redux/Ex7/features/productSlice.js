import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState:{
        items: [],
        status: "idle",
        error: null,
        searchItem: "",
    },
    reducers:{

    },
    extraReducers: 
});