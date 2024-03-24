import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    isLoading: false,
    infoRoom: {
      id: 0,
      name: "",
      type: 0,
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

  extraReducers: {},
});

export const { updateInfoUser_chatSlice, updateMessage_chatSlice } =
  chatSlice.actions;

export default chatSlice.reducer;
