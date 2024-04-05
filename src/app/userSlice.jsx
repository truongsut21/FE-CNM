import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const getInfoUser = createAsyncThunk("taikhoan/getOne", async (data) => {
  try {
    const tokenJWT = localStorage.getItem("token");
    const id = jwtDecode(tokenJWT).id;
    const url = `taikhoan/getOne/${id}`;

    const response = await axios.get(url, data, {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `${tokenJWT}`,
      },
    });
    return response.data[0];
  } catch (error) {
    throw error; // Xử lý lỗi nếu có
  }
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
    [getInfoUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getInfoUser.fulfilled]: (state, action) => {
      console.log('action.payload getInfoUser: ', action.payload)
      state.user = action.payload;
      state.isLoading = false;
    },
    [getInfoUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
