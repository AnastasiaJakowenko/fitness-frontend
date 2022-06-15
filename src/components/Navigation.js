import React from "react";
import "../style/nav.css"
// import { render } from "react-dom";
// import  FontAwesomeIcon  from "@fortawesome/react-fontawesome";
function Navigation() {
    return (
        <>
            <ul className="nav">

                <li className="nav-item">
                    <a className="nav-link active" href="#"><i class="fa-solid fa-bars"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>

            </ul>
        </>
    )

}
export default Navigation




