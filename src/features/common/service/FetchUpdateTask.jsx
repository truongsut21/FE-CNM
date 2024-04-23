import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchUpdateTask = createAsyncThunk(
  "FetchUpdateTask",
  async (data) => {
    try {
      const url = `congviec/updateTask/${data.macongviec}`;

      const response = await axios.put(url, data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log("lỗi ở FetchUpdateTask");
      return error.data;
    }
  }
);
