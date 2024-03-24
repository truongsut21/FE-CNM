import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const getPhonebook = createAsyncThunk(
  "taikhoan/getOne",
  async (data) => {
    try {
      const tokenJWT = localStorage.getItem("token");
      const id = jwtDecode(tokenJWT).id;
      const url = `danhba/getAllContact/${id}`;

      const response = await axios.get(url, data, {
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
  }
);

export const groupSlice = createSlice({
  name: "groupSlice",
  initialState: {
    listGroup: [],
  },
  reducers: {
    addPhonebook: (state, action) => {
      state.listGroup = [...state.leads, action.payload];
    },
  },

  extraReducers: {
    [getPhonebook.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhonebook.fulfilled]: (state, action) => {
      console.log("action.payload phonebook:", action.payload);
      state.listGroup = action.payload;
    },
    [getPhonebook.rejected]: (state) => {},
  },
});

export const { addPhonebook } = groupSlice.actions;

export default groupSlice.reducer;
