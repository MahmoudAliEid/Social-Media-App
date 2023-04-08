import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//here to post data from API
export const addPostFetch = createAsyncThunk(
  "feature/addPostFetch",
  async (newPost) => {
    const response = await axios.post(
      "http://localhost:5050/posts/create",
      newPost,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return response.data;
  }
);
export const postsAddSlice = createSlice({
  name: "addposts",
  initialState: {
    data: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPostFetch.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    });
    builder.addCase(addPostFetch.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(addPostFetch.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default postsAddSlice.reducer;
