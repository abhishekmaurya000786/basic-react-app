import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { resetAll } from "./externalActions";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return await res.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    status: "idle",
  },

  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "done";
        state.name = action.payload.name;
      })

      .addCase(fetchUser.rejected, (state) => {
        state.status = "error";
      })

      // ---------------------------------------------------
      // CROSS-SLICE REACTION TO external action
      // ---------------------------------------------------
      .addCase(resetAll, (state) => {
        state.name = "";
        state.status = "idle";
      })

      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          console.log("A fulfilled action happened!");
        }
      )

      .addDefaultCase((state, action) => {
        // This will run if no case matched
        // We keep it empty just for demonstration
      });
  },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;