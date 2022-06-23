import React from "react";
import "../style/nav.css";

function Navigation() {
  return (
    <>
      <ul className="nav">
        <li className="nav-item home">
          <a className="nav-link active" href="#">
          <i class="fa-solid fa-bars"></i>
          </a>
        </li>

        <div className="rechts">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Login
          </a>
        </li>
        </div>
      </ul>
    </>
  );
}
export default Navigation;
