import React from "react";

const LogOut = (setToken, setIsLoggedIn, token, isLoggedIn) => {
  return (
    <div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          try {
            localStorage.clear();
            setToken("");
            setIsLoggedIn(false);
          } catch (error) {
            console.error("There was a problem logging out.", error);
          } finally {
            window.location.reload();
          }
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
