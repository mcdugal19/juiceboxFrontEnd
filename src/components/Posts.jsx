import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api/posts";
import { SinglePost, Search } from "./index";

const Posts = ({ posts, setPosts, isLoggedIn, username, token }) => {
  useEffect(() => {
    const getPosts = async () => {
      const postsArray = await fetchAllPosts();
      setPosts(postsArray);
      console.log("Posts:", posts);
    };
    getPosts();
  }, [setPosts]);

  return (
    <div className="post-page">
      <Search posts={posts} setPosts={setPosts} />
      {posts && posts.length
        ? posts.map((post, i) => {
            return (
              <SinglePost
                key={"OnePost" + i}
                post={post}
                token={token}
                isLoggedIn={isLoggedIn}
                username={username}
                posts={posts}
                setPosts={setPosts}
              />
            );
          })
        : null}
    </div>
  );
};

export default Posts;
