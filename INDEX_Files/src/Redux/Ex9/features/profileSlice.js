import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logEverything, resetAll } from "../Actions/actoin";

export const fetchProfile = createAsyncThunk(
  "profile/fechProfile",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await res.json();
    return data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "",
    email: "",
    status: "idle",
  },
  reducers: {
    updateProfileName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "done !";
        state.name = action.payload.name;
        state.email = action.payload.email;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading !";
      })
      .addCase(fetchProfile.pending, (state) => {
        state.status = "rejected !";
      })
      .addCase(resetAll, (state) => {
        state.name = "";
        state.email = "";
        state.status = "idle";
      })
      .addCase(logEverything, ());
  },
});

export const {updateProfileName} = profileSlice.actions;
export default profileSlice.reducer;