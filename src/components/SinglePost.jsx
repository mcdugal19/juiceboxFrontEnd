import React, { useState } from "react";
import deleteTrash from "./images/deleteTrash.png";
import editPencil from "./images/editPencil.png";
import { deletePost } from "../api/posts";
import { EditPostCard } from "./index";

const SinglePost = ({ post, token, isLoggedIn, username, posts, setPosts }) => {
  const [clickedEdit, setClickedEdit] = useState(false);

  const postButtons = (
    <>
      {isLoggedIn && post.author.username === username ? (
        <>
          {/* the Edit button functions are in the file EditPostCard.jsx */}
          <button
            className="post-button"
            id="edit"
            onClick={(e) => {
              e.preventDefault();
              setClickedEdit(!clickedEdit);
            }}
          >
            {<img src={editPencil} alt="pencil icon" />} Edit
          </button>
          <button
            className="post-button"
            id="delete"
            onClick={(e) => {
              e.preventDefault();
              console.log("Post ID", post.id);
              deletePost(post.id, token);
              console.log("After delete", post.id);
              const filteredPosts = posts.filter((postObj) => {
                return postObj.id !== post.id;
              });
              setPosts(filteredPosts);
            }}
          >
            {<img src={deleteTrash} alt="trash icon" />}Delete
          </button>
        </>
      ) : null}
      {/* This is form for editing a post and will only display if user is logged in and clicks the edit button*/}
      <div className="editpost-form">
        {clickedEdit ? (
          <EditPostCard
            setClickedEdit={setClickedEdit}
            posts={posts}
            setPosts={setPosts}
            token={token}
            post={post}
          />
        ) : null}
      </div>
    </>
  );

  return (
    <>
      <div className="postCard">
        <div className="title">{post.title}</div>
        {/* <div className="author">{post.author.username}</div> */}
        <div className="content">{post.content}</div>
        {postButtons}
      </div>
    </>
  );
};

export default SinglePost;
