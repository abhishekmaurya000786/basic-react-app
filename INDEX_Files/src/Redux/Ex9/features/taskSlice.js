import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { resetAll } from "../Actions/actoin";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
    return await res.json();
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status:"idle",
    },
    reducers: {
        addTaskOptimistic: (state, action) => {
            state.items.push({
                id: Date.now(),
                title: action.payload,
                optimiidtic: true,
            });
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchTasks.pending, (state)=>{
            state.status = "pending";

        })
        .addCase(fetchTasks.fulfilled, (state,action)=>{
            state.status = "done";
            state.items = action.payload;
        })
        .addCase(fetchTasks.rejected, (state)=>{
            state.status = "error";
        })
        .addCase(resetAll, (state)=>{
            state.items = [];
            state.status = "idle";
        });
    }
}); 

export const { addTaskOptimistic } = taskSlice.actions;

export default taskSlice.reducer;