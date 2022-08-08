import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../style/sidebar.css";

function Sidebar() {
  return (
    <Menu className="menu-sidebar">
      <a className="menu-item" href="/">
        <i className="fa-solid fa-house"></i>
        <p>Home</p>
      </a>
      <a className="menu-item" href="/userkurse">
        <i className="fa-solid fa-person-running"></i><p>Meine Kurse</p>
      </a>
      <a className="menu-item" href="/usersportgeraete">
        <i className="fa-solid fa-dumbbell"></i><p>Sportgeräte</p>
      </a>
      <a className="menu-item" href="/bmirechner">
        <i className="fa-solid fa-calculator"></i><p>BMI-Rechner</p>
      </a>
      <a className="menu-item" href="/kalorienrechner">
        <i className="fa-solid fa-burger"></i><p>Kalorien-Rechner</p>
      </a>
      <a className="menu-item" href="/uservertraginfos">
        <i className="fa-solid fa-file-contract"></i><p>Vertgragsinfo</p>
      </a>
      <a className="menu-item" href="/usereinstellungen">
        <i className="fa-solid fa-gear"></i><p>Einstellungen</p>
      </a>
      <a className="menu-item" href="/userPanel">
        <i className="fa-solid fa-user"></i>
      </a>
    </Menu>
  );
}

export default Sidebar;
