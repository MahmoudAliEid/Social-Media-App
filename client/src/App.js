import "./App.css";
import Form from "./components/form/Form";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/posts/Posts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { postsFetch } from "./feature/posts";

function App() {
  //to make action or dispatch action
  const dataApi = useSelector((state) => state.posts);
  // const dataApi2 = useSelector((state) => state.addposts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsFetch());
  }, [dispatch]);
  useEffect(() => {
    console.log("the posts: ", dataApi.data);
    console.log("the status: ", dataApi.status);
    // console.log("the add  posts: ", dataApi2.data);
    // console.log("the  add posts status: ", dataApi2.status);
  }, [dataApi]);

  return (
    <div className="App ">
      <NavBar />
      <h1>Welcome to our Front-End</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Posts />
          </div>
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
