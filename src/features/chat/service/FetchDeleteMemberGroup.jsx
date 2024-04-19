import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchDeleteMemberGroup = createAsyncThunk(
  "FetchDeleteMemberGroup",
  async (data) => {
    try {
      const url = `dsthanhviennhom/deleteMember/${data._idGroup},${data._idMember}`;
      const response = await axios.delete(url, data, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      throw error; // Xử lý lỗi nếu có
    }
  }
);
