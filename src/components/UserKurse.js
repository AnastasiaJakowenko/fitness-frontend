import React from "react";
import "../style/userkurse.css";

function UserKurse() {
    return (
        <>

            <div className="userKurse">
                <h1>Kurse</h1>
                <div className="userKurseIcons">
                    <div className="userKurseIconsRechts">
                        <i class="fa-regular fa-calendar-days"></i>
                        <i class="fa-solid fa-circle-arrow-left"></i>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                    </div>
                </div>
            </div>

        </>
    )

}

export default UserKurse;