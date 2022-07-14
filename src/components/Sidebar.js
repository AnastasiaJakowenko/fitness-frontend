import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../style/sidebar.css";

function Sidebar() {
  return (
    <Menu className="menu-sidebar">
      <a className="menu-item" href="/">
        <i className="fa-solid fa-house"></i>
      </a>
      <a className="menu-item" href="/userkurse">
        <i className="fa-solid fa-person-running"></i>
      </a>
      <a className="menu-item" href="/usersportgeraete">
        <i className="fa-solid fa-dumbbell"></i>
      </a>
      <a className="menu-item" href="/bmirechner">
        <i className="fa-solid fa-calculator"></i>
      </a>
      <a className="menu-item" href="/kalorienrechner">
        <i className="fa-solid fa-burger"></i>
      </a>
      <a className="menu-item" href="/uservertraginfos">
        <i className="fa-solid fa-file-contract"></i>
      </a>
      <a className="menu-item" href="/usereinstellungen">
        <i className="fa-solid fa-gear"></i>
      </a>
      <a className="menu-item" href="/userpanel">
        <i className="fa-solid fa-user"></i>
      </a>
    </Menu>
  );
}

export default Sidebar;
