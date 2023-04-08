import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const Post = (props) => {
  return (
    <div className="card" style={{ width: "15rem", margin: " 10px 0" }}>
      <img
        src={`http://localhost:5050/${props.post.selectedFile.img}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.post.creator} hi</h5>
        <p className="card-text">{props.post.title}</p>
        <p className="card-text">{props.post.message}</p>
        <p className="card-text">{props.post.tages}</p>
        <div
          className="btn btn-primary"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100px",
          }}
        >
          <div>{props.post.likeCount}</div>
          <p onClick={() => {}}>
            <FaThumbsUp></FaThumbsUp>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
