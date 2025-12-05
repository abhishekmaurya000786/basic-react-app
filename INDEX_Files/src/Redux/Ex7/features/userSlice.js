import {
  createSlice,
  createAsyncThunk,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
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
      })
      .addMatcher(isFulfilled(fetchUser), (state) => {
        state.message = "User loaded successfully..";
      })
      // add matcher actually matches the action type pattern, it consist of 3 functions: isPending, isFulfilled, isRejected
      .addMatcher(isRejected(fetchUser), (state) => {
        state.message = "laoding failed..!";
      })
      .addDefaultCase((state, action) => { 
        if (action.type.startsWith("user")) {
          console.log("Unhandled action inside user Slice ->", action.type);
        }
        // add default case is actually a catch all for any action that is not handled above, if any action is dispatched that is not handled above, this function will be called
      });
  },
});
