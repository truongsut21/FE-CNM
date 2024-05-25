import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchDeleteTask = createAsyncThunk(
  "FetchDeleteTask",
  async (data) => {
    try {
      const url = `congviec/deleteTask/${data}`;

      const response = await axios.get(url, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log("lỗi ở FetchDeleteTask");
      return error.data;
    }
  }
);
