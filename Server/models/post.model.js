import mongoose from "mongoose";
const URL = "mongodb://localhost:27017/SocialMedia";
//create the schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tages: [String],
  selectedFile: {
    img: "",
    preview: "",
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});
//creating of the model
const postModel = mongoose.model("post", postSchema);
export const getPosts = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(URL)
      .then(() => {
        const allPosts = postModel.find();
        return allPosts;
      })
      .then((posts) => {
        mongoose.disconnect();
        resolve(posts);
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

//here create the function to create a post
export const createPost = (creator, title, message, tages, imge) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(URL)
      .then(() => {
        let newPost = new postModel({
          title,
          message,
          creator,
          tages,
          selectedFile: {
            img: imge.path,
            preview: imge.filename,
          },
        });
        return newPost.save();
      })
      .then((res) => {
        mongoose.disconnect();
        resolve("The book has been added successfully!");
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
