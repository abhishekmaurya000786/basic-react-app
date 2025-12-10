import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk('profile/fechProfile', async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await res.json();
    return data;
})
