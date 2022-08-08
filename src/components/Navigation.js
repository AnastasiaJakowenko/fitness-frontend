import React from "react";
import "../style/navigation.css";
import Sidebar from "./Sidebar.js";

function Navigation() {
  return (
    <>
      <div className="nav">
        <div className="home">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
        </div>
        <div className="rechts">
          <div>
          <a className="nav-link kurse_link" href="/kurse">
              Kurse
            </a>
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
