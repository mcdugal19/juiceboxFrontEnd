import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/posts";
import { SinglePost } from "./index";

const Posts = ({ posts, setPosts, isLoggedIn, token }) => {
  //   useEffect(() => {
  //     const getPosts = async () => {
  //       const postsArray = await fetchPosts(token);
  //       setPosts(postsArray);
  //       console.log(postsArray);
  //     };
  //     getPosts();
  //   }, [setPosts]);
  return (
    <div className="post-page">
      {/* <Search /> */}
      {posts && posts.length
        ? posts.map((post, i) => {
            return (
              <SinglePost
                key={"OnePost" + i}
                post={post}
                token={token}
                isLoggedIn={isLoggedIn}
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
