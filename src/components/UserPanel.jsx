import React from "react";
import NaviUserPanel from "./NaviUserPanel.js";
import "../style/user-panel.css";

const UserPanel = () => {
    return (
        <>
            <NaviUserPanel />
            <div className="main">
                <ul className="list-panel">
                    <li> <i className="fa-solid fa-user"></i> User</li>
                    <li> <i className="fa-solid fa-person-running"></i> Kurse</li>
                    <li> <i className="fa-solid fa-calculator"></i> BMI</li>
                    <li> <i className="fa-solid fa-calculator"></i> Kal-rechner</li>
                    <li> <i className="fa-solid fa-dumbbell"></i> Geräte</li>
                </ul>
            </div>

        </>
    )

}

export default UserPanel;