import React from "react";

import "../style/navigation.css";
// import "../style/nav.css";

import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from "axios";
const NaviUserPanel = () => {


    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState('');

    const baseURL = "http://localhost:4000";
    const axiosPublic = axios.create({
        baseURL: baseURL,
        withCredentials: true
    });

    const logoutHandler = async () => {
        await axiosPublic.post("/logout")
        setIsAuth(false);
        setToken('');
        Cookies.remove('email');
    };

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
                        <a className="nav-link" href="/">
                            <i className="fa fa-sign-out fa-2x" aria-hidden="true" onClick={() => logoutHandler()}></i>
                        </a>
                    </li>
                </div>
            </ul>
        </>
    );
}
export default NaviUserPanel;
