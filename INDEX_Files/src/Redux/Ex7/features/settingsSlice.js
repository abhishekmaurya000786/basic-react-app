import { createSlice } from "@reduxjs/toolkit";



export const settingSlice = createSlice({
    name: "settings",
    initialState: {
        theme: "light",
        lastLoadedUser: null,
    }
});