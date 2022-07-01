import React from "react";
import "../style/nav.css";
import { NavLink } from "react-router-dom";
function Navigation({ logoutHandler }) {
  return (
    <>
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

      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/todo-app">Todo App</NavLink>
      <NavLink to="/kontakt">Kontakt</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/datenschutz">Datenschutz</NavLink>
      <NavLink to="/extras">Extras</NavLink>
      <NavLink to="/postslist">Posts list</NavLink> */}
    </>
  );
}
export default Navigation;
