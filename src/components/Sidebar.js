import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../style/sidebar.css";
import { LoginContext } from '../context/loginContext.js';
import { useContext, useState, useEffect } from 'react';

function Sidebar() {
  const { login, id } = useContext(LoginContext);
  const [isLogged, setIsLogged] = login;
  const [userId, setUserId] = id;
  
  return (
    <Menu className="menu-sidebar">
      <a className="menu-item" href="/">
        <i className="fa-solid fa-house"></i>
        <p>Home</p>
      </a>
      <a className="menu-item" href="/bmirechner">
        <i className="fa-solid fa-calculator"></i><p>BMI-Rechner</p>
      </a>
      <a className="menu-item" href="/kalorienrechner">
        <i className="fa-solid fa-burger"></i><p>Kalorien-Rechner</p>
      </a>
      <a className="menu-item" href="/userkurse">
        <i className="fa-solid fa-person-running"></i><p>Meine Kurse</p>
      </a>
      <a className="menu-item" href="/usersportgeraete">
        <i className="fa-solid fa-dumbbell"></i><p>Sportgeräte</p>
      </a>
      <a className="menu-item" href="/userPanel">
        <i className="fa-solid fa-user"></i><p>User</p>
      </a>
    </Menu>
  );
}

export default Sidebar;
