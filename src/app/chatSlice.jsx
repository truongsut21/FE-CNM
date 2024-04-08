import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMessagePN = createAsyncThunk("getMessagePN", async () => {
  try {
    const tokenJWT = localStorage.getItem("token");
    const url = `tinnhan/getMessagePN`;

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

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    isLoading: false,
    infoRoom: {
      id: 0,
      name: "",
      type: 0,
      idGroup: null,
      idPhonebook: null,
    },
    message: [],

    type: 0,
  },
  reducers: {
    updateInfoUser_chatSlice: (state, action) => {
      state.infoRoom = action.payload;
    },

    updateMessage_chatSlice: (state, action) => {
      state.message = action.payload;
    },
  },

  extraReducers: {
    [getMessagePN.fulfilled]: (state, action) => {
      console.log("action.payload listGroup:", action.payload);
      state.message = action.payload;
    }
  },
});

export const { updateInfoUser_chatSlice, updateMessage_chatSlice } =
  chatSlice.actions;

export default chatSlice.reducer;
