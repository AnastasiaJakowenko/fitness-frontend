import React from "react";
import "../style/navigation.css";
import Sidebar from "./Sidebar.js";

function Navigation() {
  return (
    <>
      <div className="nav">
        <div className="home">
          <a className="nav-link">
            {/* <i className="fa-solid fa-bars"></i> */}
            <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
          </a>
        </div>
        <div className="rechts">
          <div>
            <a className="nav-link" href="/register">
              Register
            </a>
          </div>
          <div>
            <a className="nav-link" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>

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
