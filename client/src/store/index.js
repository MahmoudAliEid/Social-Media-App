//here create the store of Redux
import { configureStore } from "@reduxjs/toolkit";
//here import the reducer of posts
import postsReducer from "../feature/posts";
import addpostReduer from "../feature/addPost";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    addposts: addpostReduer,
  },
});
