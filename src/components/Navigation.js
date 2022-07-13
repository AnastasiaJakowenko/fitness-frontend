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
    </>
  );
}
export default Navigation;
