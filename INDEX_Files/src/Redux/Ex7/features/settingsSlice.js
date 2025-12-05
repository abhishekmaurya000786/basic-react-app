import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userSlice";
import { resetApp } from "../Actions/globalActions";



export const settingSlice = createSlice({
    name: "settings",
    initialState: {
        theme: "light",
        lastLoadedUser: null,
    },
    reducers:{},

    extraReducers: (builder)=> {
        builder
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.lastLoadedUser = action.payload.name;
        })
        .addCase(resetApp, (state)=>{
            state.theme = "light";
            state.lastLoadedUser = "";
        });
    }
});