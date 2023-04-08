import axios from "axios";
//get the url
const url = "http://localhost:4040/students";
//fetch the data
export const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};
console.log("the from api index", fetchPosts());
