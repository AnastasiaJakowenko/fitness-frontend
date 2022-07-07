import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../style/sidebar.css";

function props() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/kurse">
        Kurse
      </a>
      <a className="menu-item" href="/usersportgeraete">
        Sportgeräte
      </a>
      <a className="menu-item" href="/userbmirechner">
        BMI-Rechner
      </a>
      <a className="menu-item" href="/userkalorienrechner">
        Kalorienrechner
      </a>
      <a className="menu-item" href="/uservertraginfos">
        Vertragsinformationen
      </a>
      <a className="menu-item" href="/usereinstellungen">
        Einstellungen
      </a>
      <a className="menu-item" href="/userpanel">
        User
      </a>
    </Menu>
  );
}

export default props;
