import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchRegister = createAsyncThunk("FetchRegister", async (data) => {
  try {
    const url = `taikhoan/register`;
    const response = await axios.post(url, data, {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error; // Xử lý lỗi nếu có
  }
});
