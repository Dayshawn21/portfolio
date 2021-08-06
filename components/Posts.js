import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="post py-2">
      <div className="container">
        <h1 className="text-center large">Projects</h1>

        <div>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
