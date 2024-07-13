import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchSendMessageGR = createAsyncThunk(
  "FetchSendMessageGR",
  async (data) => {
    try {
      const url = `http://ontask.io.vn:3003/api/tinnhan/sendMessageGR`;
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
        console.log("Lỗi FetchSendMessageGR");
      }
      return response.json();
    } catch (error) {
      console.log("Lỗi FetchSendMessageGR");
      return error.data; // Xử lý lỗi nếu có
    }
  }
);
