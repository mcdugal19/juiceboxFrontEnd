import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { NavBar, Login, LogOut } from "./index";

const Main = () => {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [userObj, setUserObj] = useState({});

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
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
      <NavBar />
      <Switch>
        <Route path="/Login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/LogOut">
          <LogOut setToken={setToken} />
        </Route>
        {/* <Route path="/SignUp">
          <SignUp setToken={setToken} />
        </Route>
        <Route path="/CreatePost">
          <CreatePost setToken={setToken} setPosts={setPosts} posts={posts} />
        </Route>
        <Route path="/Profile">
          <Profile posts={posts} setPosts={setPosts} userObj={userObj} />
        </Route>
        <Route path="/">
          <Posts
            setToken={setToken}
            postId={postId}
            setPostId={setPostId}
            posts={posts}
            setPosts={setPosts}
          />
        </Route> */}
      </Switch>
    </>
  );
};

export default Main;
