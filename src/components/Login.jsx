import React, { useState } from "react";
import { fetchUserToken } from "../api/users";
import { useHistory } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  return (
    <div>
      <h1>Welcome Back</h1>
      {/* The form below is the form that verifies login credentials */}
      <div className="form-container">
        <form
          action=""
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await fetchUserToken(username, password);
              setToken(response);
              localStorage.setItem("token", response);
              localStorage.setItem("username", username);
              setIsLoggedIn(true);
            } catch (error) {
              console.error(
                "There was a problem with your login information.",
                error
              );
            } finally {
              setUsername("");
              setPassword("");
              history.push("/");
            }
          }}
        >
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
      {/* the below section only displays after a successful user login */}
      <div
        className="login-confirmation"
        style={{
          display: isLoggedIn ? "block" : "none",
        }}
      >
        <h3>LOGIN SUCCESS!</h3>
      </div>
    </div>
  );
};

export default Login;

// fetchUserToken: get request
//
