import react from "react";
import { Link } from "react-router-dom";
import { LogOut } from "./index";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="lnk">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/Profile">
          Profile
        </Link>
      </div>
      <h1>JuiceBox</h1>
      {!localStorage.getItem("token") ? (
        <div className="btn">
          <Link className="log" to="/Login">
            <button type="button">Login</button>
          </Link>
          <Link className="log" to="/SignUp">
            <button type="button">SignUp</button>
          </Link>
        </div>
      ) : (
        <div className="btn">
          <Link className="log" to="/LogOut">
            <LogOut />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
