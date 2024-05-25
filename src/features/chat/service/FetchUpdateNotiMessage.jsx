import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchUpdateNotiMessage = createAsyncThunk(
  "FetchUpdateNotiMessage",
  async (data) => {
    try {
      const url = `tinnhan/getNotiMessage`;
      const response = await axios.post(url, data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log("lỗi ở FetchUpdateNotiMessage");
      return error.data;
    }
  }
);
