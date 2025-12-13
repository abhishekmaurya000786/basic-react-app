// profileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { resetAll, logEverything } from '../Actions/action';
import { fetchTasks } from './taskSlice';

// -------------------------
// ASYNC: fetch profile
// -------------------------
export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/2');
    return await res.json();
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    email: '',
    status: 'idle',
  },

  reducers: {
    updateProfileName: (state, action) => {
      state.name = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // -----------------------------------
      // THUNK lifecycle
      // -----------------------------------
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'done';
        state.name = action.payload.name;
        state.email = action.payload.email;
      })

      .addCase(fetchProfile.rejected, (state) => {
        state.status = 'error';
      })

      // ---------------------------------------------------------
      // React to resetAll (external)
      // ---------------------------------------------------------
      .addCase(resetAll, (state) => {
        state.name = '';
        state.email = '';
        state.status = 'idle';
      })

      // ---------------------------------------------------------
      // React to another slice’s thunk: fetchTasks.fulfilled
      // ---------------------------------------------------------
      .addCase(fetchTasks.fulfilled, (state) => {
        state.status = 'synced-with-tasks';
      })

      // ---------------------------------------------------------
      // Matcher for fulfilled actions
      // ---------------------------------------------------------
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        () => {
          console.log('A global success action occurred');
        }
      )

      // ---------------------------------------------------------
      // addDefaultCase
      // ---------------------------------------------------------
      .addDefaultCase((state, action) => {
        if (action.type === logEverything.type) {
          console.log('Profile slice received logEverything');
        }
      });
  },
});

export const { updateProfileName } = profileSlice.actions;
export default profileSlice.reducer;