import React from "react";
import "../style/userkurse.css";

function UserKurse() {
    return (
        <>

            <div className="userKurse">
                <h1>Hallo {"userName"}. Das sind deine Kurse</h1>
                <div className="userKurseNav">
                    <div className="userKurseNavRechts">
                        <div>
                            <a href="/calendar">
                                <i className="fa-regular fa-calendar-days"></i>
                            </a>
                        </div>
                        <div>
                            <i className="fa-solid fa-circle-arrow-left"></i>
                        </div>
                        <div>
                            <p>Heute</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default UserKurse;