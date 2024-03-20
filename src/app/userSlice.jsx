import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("/leads/content", async () => {
  const response = await axios.get("/api/users?page=2", {});
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: {
      mataikhoan: undefined,
      sodienthoai: "",
      matkhau: "",
      email: "",
      diachi: "",
      hodem: "",
      ten: "",
      NgaySinh: "",
      gioitinh: 0,
    },
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.isLoading = false;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
