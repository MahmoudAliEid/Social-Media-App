import React from "react";
import Post from "./post/Post";
//to use data from redux
import { useSelector } from "react-redux";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5050";

const Posts = () => {
  //to enter to all data in redux
  const posts = useSelector((state) => state.posts.data);

  return (
    <div className="container text-center ">
      <div className="row">
        {posts.map((post, index) => {
          return (
            <>
              <div className="col" key={post._id}>
                <Post post={post} index={index} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
