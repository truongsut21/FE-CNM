import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const getListGroup = createAsyncThunk("nhom/getAllGroups", async () => {
  try {
    const tokenJWT = localStorage.getItem("token");
    const id = jwtDecode(tokenJWT).id;
    const url = `nhom/getAllGroups/${id}`;

    const response = await axios.get(url, {
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

export const getListMember = createAsyncThunk(
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
    listNembers: [],
  },
  reducers: {
    addPhonebook: (state, action) => {
      state.listGroup = [...state.leads, action.payload];
    },
  },

  extraReducers: {
    [getListGroup.fulfilled]: (state, action) => {
      console.log("action.payload listGroup:", action.payload);
      state.listGroup = action.payload;
    },
    [getListMember.fulfilled]: (state, action) => {
      console.log("action.payload getListMember:", action.payload);
      state.listNembers = action.payload;
    },
  },
});

export const { addPhonebook } = groupSlice.actions;

export default groupSlice.reducer;
