import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { resetAll } from "../Actions/actoin";

export const fetchTasks = createAsyncThunk();