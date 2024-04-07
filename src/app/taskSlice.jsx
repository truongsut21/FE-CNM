import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListAssignTask = createAsyncThunk("getListAssignTask", async (data) => {
    console.log("first")
    try {
        const tokenJWT = localStorage.getItem("token");
        const url = `congviec/getListAssignTask/`;

        const response = await axios.post(url, data, {
            headers: {
                accept: "*/*",
                "Content-Type": "application/json",
                Authorization: `${tokenJWT}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error; // Xử lý lỗi nếu có
    }
});

export const taskSlice = createSlice({

    name: "taskSlice",
    initialState: {
        taskAssign_taskSlice: null,
        taskRecei_taskSlice: null,
    },
    reducers: {
        updateTaskAssign_taskSlice: (state, action) => {
            state.taskAssign = action.payload;
        },

        updateTaskRecei_taskSlice: (state, action) => {
            state.taskRecei = action.payload;
        },
    },

    extraReducers: {

        [getListAssignTask.fulfilled]: (state, action) => {
            console.log("action.payload taskAssign_taskSlice:", action.payload);
            state.taskAssign_taskSlice = action.payload;
        }

    },
});

export const { updateTaskAssign_taskSlice, updateTaskRecei_taskSlice } = taskSlice.actions;

export default taskSlice.reducer;