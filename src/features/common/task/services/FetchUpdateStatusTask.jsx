import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchUpdateStatusTask = createAsyncThunk(
  "FetchUpdateStatusTask",
  async (data) => {
    try {
      const url = `congviec/updateTaskStatus`;

      const response = await axios.put(url, data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log("lỗi ở FetchUpdateStatusTask");
      return error.data;
    }
  }
);
