import React, { useState } from "react";
import { editPost } from "../api/posts";

const EditPostCard = ({ token, posts, setPosts, post, setClickedEdit }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  return (
    <>
      <form
        className="editpost-form"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const editPostObj = {
              title: editTitle !== "" ? editTitle : post.title,
              content: editContent !== "" ? editContent : post.content,
            };
            const response = await editPost(editPostObj, post.id, token);
            const editedPost = response.post;
            const filteredPosts = posts.filter((postObj) => {
              return postObj.id !== editedPost.id;
            });
            const newArr = [editedPost, ...filteredPosts];
            setPosts(newArr);
            setClickedEdit(false);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label>Edit Title</label>
        <input
          type="text"
          placeholder="Optional edited title"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
        />
        <label>Edit Content</label>
        <textarea
          placeholder="Optional edited content"
          value={editContent}
          onChange={(e) => {
            setEditContent(e.target.value);
          }}
        />
        <button type="submit">Edit Post</button>
      </form>
    </>
  );
};

export default EditPostCard;
