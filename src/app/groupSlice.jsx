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

export const getAllMembersInGroup = createAsyncThunk(
  "getAllMembersInGroup",
  async (id) => {
    try {
      const tokenJWT = localStorage.getItem("token");
      const url = `/dsthanhviennhom/getAllMembersInGroup/${id}`;
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
  }
);

export const groupSlice = createSlice({
  name: "groupSlice",
  initialState: {
    listGroup: [],
    listNembers: [],
  },
  reducers: {
    addNembersToGroup: (state, action) => {
      state.listGroup = [...state.leads, action.payload];
    },
  },

  extraReducers: {
    [getListGroup.fulfilled]: (state, action) => {
      console.log("action.payload listGroup:", action.payload);
      state.listGroup = action.payload;
    },
    [getAllMembersInGroup.fulfilled]: (state, action) => {
      console.log("action.payload getAllMembersInGroup:", action.payload);
      state.listNembers = action.payload;
    },
  },
});

export const { addNembersToGroup } = groupSlice.actions;

export default groupSlice.reducer;
