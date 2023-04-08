import express from "express";
import mongoose from "mongoose";
import path from "path";
// const cors = require("cors");
import cors from "cors";
//import the router of posts
import postsRouter from "./routers/post.router.js";

//declare the server
const URL = "mongodb://localhost:27017/SocialMedia";
mongoose.set("strictQuery", true);
const server = express();
const port = process.env.port || 5050;
//make static folder

// server.use(express.static(path.join(__dirname, "../images")));
//use Body Parser
server.use(express.json({ limit: "30mb", extended: true }));
server.use(express.urlencoded({ limit: "30mb", extended: true }));
//use cors
server.use(cors());
//here user the router of posts
server.use("/posts", postsRouter);
//make the welcome message
server.get("/", (req, res) => {
  res.send("welcome to our Database!!");
});
server.use("/images", express.static("images"));
//connect to the server
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //make server listen
    server.listen(port, () => {
      console.log(`The Server runing in Potr ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
