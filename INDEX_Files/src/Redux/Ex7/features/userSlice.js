import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { forceLogout, resetApp } from "../Actions/globalActions";

export const fetchUser = createAsyncThunk("user/fetchUsers", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Jhon", age: 21 });
    }, 1000);
  });
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    status: "idle",
    message: "",
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },

    clearMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "error";
      })
      .addCase(resetApp, (state) => {
        state.data = null;
        state.status = "idle";
        state.message = "";
      })
      .addCase(forceLogout, (state) => {
        state.data = null;
        state.message = "User Logged out by force";
      });
  },
});
