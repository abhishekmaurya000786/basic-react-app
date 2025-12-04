import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUsers", 
    async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({name:"Jhon", age: 21})
            }, 1000);
        });
    }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    status: "idle",
    message: "",
  },
  reducers: {
    setMessage: (state,action) => {
      state.message = action.payload;
    },

    clearMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending);
  },
});
