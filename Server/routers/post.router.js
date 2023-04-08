// import the requires
import express from "express";
const router = express.Router();
import multer from "multer";
import {
  getPostsController,
  createPostController,
} from "../controllers/post.controller.js";
//use the router
router.get("/", getPostsController);
router.post(
  "/create",
  multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "images");
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
      },
    }),
  }).single("img"),
  createPostController
);

export default router;
