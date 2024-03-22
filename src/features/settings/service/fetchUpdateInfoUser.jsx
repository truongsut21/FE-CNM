import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const FetchUpdateInfoUser = createAsyncThunk(
  "FetchUpdateInfoUser",
  async (data) => {
    try {
      const tokenJWT = localStorage.getItem("token");
      const id = jwtDecode(tokenJWT).id;
      const url = `taikhoan/update/${id}`;

      const response = await axios.put(url, data, {
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
