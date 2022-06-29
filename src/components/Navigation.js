import React from "react";
import "../style/nav.css";

// import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <>
       <div className="burger_menu"></div>
      <ul className="nav">
        <li className="nav-item home">
          <a className="nav-link active" href="/">
            <i className="fa-solid fa-bars"></i>
          </a>
        </li>

        <div className="rechts">
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
        </div>
      </ul>

    </>
  );
}

export default Navigation;