import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../';
import { resetAll } from '../Actions/globalActions';

const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchUser.fulfilled, (state) => {
        state.value += 10;
      })

      .addCase(resetAll, (state) => {
        state.value = 0;
      });
  },
});

export const { increment } = scoreSlice.actions;
export default scoreSlice.reducer;