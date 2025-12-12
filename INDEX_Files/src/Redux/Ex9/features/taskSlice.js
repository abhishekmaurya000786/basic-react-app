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
            state.items.push(action.payload);
        }
}); 