import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { NavBar, Login, LogOut, Posts, Search, NewPost, SignUp } from "./index";
import { fetchAllPosts } from "../api/posts";

const Main = () => {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  // const [postId, setPostId] = useState(null);
  // const [userObj, setUserObj] = useState({});
  // const [userPosts, setUserPosts] = useState([]);
  // const [userMessages, setUserMessages] = useState([]);

  // useEffect(() => {}, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      const getPosts = async () => {
        const postsArray = await fetchAllPosts(storedToken);
        setPosts(postsArray);
      };
      getPosts();
    }
  }, [token]);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  });
  //   async function getUser() {
  //     const data = await fetchUser(storedToken);
  //     setUserObj(data /*.?*/);
  //   }
  //   if (storedToken) {
  //     setToken(storedToken);
  //     getUser();
  //   }
  // }, [token]);
  return (
    <>
      <NavBar
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        setToken={setToken}
        token={token}
      />
      <Switch>
        <Route path="/Login">
          <Login
            setToken={setToken}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/LogOut">
          <LogOut setToken={setToken} token={token} />
        </Route>
        <Route path="/SignUp">
          <SignUp setToken={setToken} />
        </Route>
        {/* <Route path="/CreatePost">
          <CreatePost setToken={setToken} setPosts={setPosts} posts={posts} />
        </Route>
        <Route path="/Profile">
          <Profile posts={posts} setPosts={setPosts} userObj={userObj} />
  </Route> */}
        <Route path="/">
          <Posts
            posts={posts}
            setPosts={setPosts}
            isLoggedIn={isLoggedIn}
            username={username}
            token={token}
          />
          <NewPost
            token={token}
            posts={posts}
            setPosts={setPosts}
            isLoggedIn={isLoggedIn}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
