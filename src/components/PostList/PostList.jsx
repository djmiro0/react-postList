import React from "react";
import Post from "../Post/Post";
import "./postlist.css";

export default function PostList({ posts }) {
  return (
    <div className="flex-grid">
      {/* {array with different posts} */}
      {posts.map((post, index) => {
        return (
          <div className="col" key={index}>
            <Post post={post} />
          </div>
        );
      })}
    </div>
  );
}
