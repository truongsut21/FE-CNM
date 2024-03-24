import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchCreateGroup = createAsyncThunk(
  "FetchCreateGroup",
  async (data) => {
    try {
      const tokenJWT = localStorage.getItem("token");
      const url = `nhom/createGroup`;

      const response = await axios.post(url, data, {
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
