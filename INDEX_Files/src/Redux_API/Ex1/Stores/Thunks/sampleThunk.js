import { createAsyncThunk } from "@reduxjs/toolkit";

export const sampleThunk = createAsyncThunk({
    "sample/fetchSomething", async () => {
        const res = fetch("httpshttps://dummyjson.com/products/1");
        return res.json();
    }
});