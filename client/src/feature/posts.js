import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:5050/posts";
//here to get data from API
export const postsFetch = createAsyncThunk("feature/postsFetch", async () => {
  const response = await axios.get(url);
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postsFetch.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    });
    builder.addCase(postsFetch.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(postsFetch.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default postsSlice.reducer;
