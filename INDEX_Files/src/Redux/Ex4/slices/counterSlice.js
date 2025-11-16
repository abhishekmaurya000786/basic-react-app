import { createSlice } from '@reduxjs/toolkit';

// Initial state object
const initialState = {
  value: 0,
};

// Slice = actions + reducer tied together
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer handles immutability
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export reducer
export default counterSlice.reducer;