import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchUpdateNameContact = createAsyncThunk(
  "FetchUpdateNameContact",
  async (data) => {
    try {
      const url = `danhba/updateContact`;
      const response = await axios.post(url, data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log("lỗi ở FetchUpdateNameContact");
      return error.data;
    }
  }
);
