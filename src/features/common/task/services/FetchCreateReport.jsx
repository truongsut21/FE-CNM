import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchCreateReport = createAsyncThunk(
  "FetchCreateReport",
  async (data) => {
    try {
      const url = `baocaotiendo/createReport`;

      const response = await axios.post(url, data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log("lỗi ở FetchCreateReport");
      return error.data;
    }
  }
);
