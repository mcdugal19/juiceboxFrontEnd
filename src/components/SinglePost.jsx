import React from "react";

const SinglePost = ({ post, token, isLoggedIn, username, posts, setPosts }) => {
  return (
    <>
      <div className="postCard">
        <div className="title">{post.title}</div>
        {/* <div className="author">{post.author.username}</div> */}
        <div className="content">{post.content}</div>
      </div>
    </>
  );
};

export default SinglePost;
