import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api/posts";

// this component displays a search bar above the posts section and filters the posts based on keywords

const Search = ({ posts, setPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);
  const [clickedClear, setClickedClear] = useState(false);

  function postMatches(post, searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase()
    if (
      post.title.toLowerCase().includes(lowerSearchTerm) ||
      post.content.toLowerCase().includes(lowerSearchTerm) ||
      post.author.username.includes(searchTerm)
    ) {
      return true;
    }
  }

  // The useEffects below display the filtered results and allows a clear button to return the state to all posts
  useEffect(() => {
    const filteredPostsArray = posts.filter((post) =>
      postMatches(post, searchTerm)
    );
    setPosts(filteredPostsArray);
  }, [clickedSearch]);

  useEffect(() => {
    const getPosts = async () => {
      const postsArray = await fetchAllPosts();
      setPosts(postsArray);
    };
    getPosts();
  }, [clickedClear]);


  return (
    <form
      id="search"
      onSubmit={async (event) => {
        event.preventDefault();
        setClickedSearch(!clickedSearch);
      }}
    >
      <label htmlFor="keywords">Search</label>
      <input
        id="keywords"
        type="text"
        placeholder="enter keyword..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit">SEARCH</button>
      <button
        onClick={() => {
          setClickedClear(!clickedClear);
          setSearchTerm("");
        }}
      >
        CLEAR
      </button>
    </form>
  );
};

export default Search;
