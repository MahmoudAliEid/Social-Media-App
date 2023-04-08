//import the Post Model
import { getPosts, createPost } from "../models/post.model.js";

export const getPostsController = (req, res, next) => {
  getPosts()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ Error: err.message, messge: "There is no Posts" });
    });
};
//function to create the post
export const createPostController = (req, res, next) => {
  let thePost = req.body;
  // req.file.filename;
  console.log(req.file);
  createPost(
    req.body.creator,
    req.body.title,
    req.body.message,
    req.body.tages,
    req.file
  )
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(401).json({ Error: err.message });
    });
};
