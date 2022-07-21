import React from "react";
import "../style/navigation.css";
import { useContext } from 'react';
import { LogoutContext } from "../context/loginContext.js";

const NaviUserPanel = () => {
    // const { auth, logout } = useContext(LogoutContext);
    const { logout } = useContext(LogoutContext);
    const logoutHandler = logout;
    return (
        <>
            <ul className="nav">
                <li className="nav-item home">
                    <a className="nav-link active" href="/">
                        <i className="fa-solid fa-house"></i>
                    </a>
                </li>

                <div className="rechts">
                    <li className="nav-item">
                        <span className="nav-link" href="/" onClick={(e) => { e.preventDefault(); logout() }}>
                            <i className="fa fa-sign-out fa-2x" aria-hidden="true" ></i>
                        </span>
                    </li>
                </div>
            </ul>
        </>
    );

}

export default NaviUserPanel;
