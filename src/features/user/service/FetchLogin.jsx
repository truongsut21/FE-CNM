import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchLogin = createAsyncThunk("FetchLogin", async (data) => {
  try {
    const url = `http://ontask.io.vn:3003/api/auth/login`;
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
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw error; // Xử lý lỗi nếu có
  }
});
