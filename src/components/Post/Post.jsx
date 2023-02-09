import React from "react";

export default function Post({ post }) {
  return (
    <div className="card background-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>

        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
