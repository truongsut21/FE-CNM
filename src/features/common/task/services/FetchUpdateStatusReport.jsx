import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchUpdateStatusReport = createAsyncThunk(
  "FetchUpdateStatusReport",
  async (data) => {
    try {
      const url = `baocaotiendo/updateStatusReport`;

      const response = await axios.post(url, data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log("lỗi ở FetchUpdateStatusReport");
      return error.data;
    }
  }
);
