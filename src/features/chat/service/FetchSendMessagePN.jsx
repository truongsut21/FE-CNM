import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchSendMessagePN = createAsyncThunk(
  "FetchSendMessagePN",
  async (data) => {
    try {
      const url = `http://localhost:3003/api/tinnhan/sendMessagePN`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        // Xử lý lỗi nếu có
        throw new Error("Lỗi FetchSendMessagePN");
      }
      return response.json();
    } catch (error) {
      throw error; // Xử lý lỗi nếu có
    }
  }
);
