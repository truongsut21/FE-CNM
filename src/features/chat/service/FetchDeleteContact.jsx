import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchDeleteContact = createAsyncThunk(
  "FetchDeleteContact",
  async (id) => {
    try {
      const tokenJWT = localStorage.getItem("token");
      const url = `danhba/deleteContact/${id}`;

      const response = await axios.put(url, {
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
