import "../style/userInfo.css"
// import React, { useState } from "react";


function UserInfo() {
    //     const [vorname, setVorname] = useState();
    //     const [nachname, setNachname] = useState()
    //     const [kurs, setKurs] = useState()
    //     const [gerat, setGerat] = useState()
    //    setVorname("Max")
    //    setNachname("Mustermann")
    //    setKurs("joga")
    //    setGerat("elips")
    return (
        <>
            <div className="user_container">
                <div className="container_gelb">
                  
                    <img
                        className="imgUser"
                        src={require("../img/avataaars.png")}
                        alt=""
                    ></img>

                    <h3>Max Mustermann</h3>

                    <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                   
                </div>
                <div className="container_white">
                    <h2>Informationen</h2>
                    <div className="textInfo">
                   <p><b>Vorname:</b> Max</p>
                    <p><b>Nachname:</b> Mustermann</p>
                    <p><b>Kurs:</b> Yoga</p>
                   <p><b>Geräte:</b> Laufband2</p>

                    <i class="fa-solid fa-house-chimney"></i>
                    </div>
                </div>
            </div>



        </>
    )
}

export default UserInfo;