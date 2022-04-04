import React, { useState } from "react";
import { createPost } from "../api/posts";

// this component is responsible for creating new posts and is displayed on the right-hand side of the *Posts page//


const NewPost = ({ token, posts, setPosts, isLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="newpost-page">
      {/* The below form is only displayed when the user is logged in */}
      {!isLoggedIn ? (
        <div className="newpost-form">Please log in/register to create posts
        or send messages.</div>
      ) : (
        <>
          <form
            className="newpost-form"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const postObj = {
                  title,
                  content,
                };
                const response = await createPost(postObj, token); 
                console.log('r.title', response.title);
                console.log('response', response)           
                let newArr = [...posts, response];
                setPosts(newArr);
                console.log('posts', posts)
              } catch (error) {
                console.error(error);
              }
            }}
          >
            <label>Title</label>
            <input
              type="text"
              placeholder="New title here"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label>Content</label>
            <textarea
              placeholder="New post here"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewPost;
