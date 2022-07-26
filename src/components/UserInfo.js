import "../style/userInfo.css"
import { useState, useEffect, useContext } from "react";
import { LoginContext, LogoutContext } from "../context/loginContext.js";
import axios from "axios";

function UserInfo() {

    const [isLogged, setIsLogged] = useContext(LoginContext);
    // const [userInfo, setUserInfo] = useState(["firstName", "lastName", "course_name", "device_name"]);
    const [userInfo, setUserInfo] = useState([]);
    // const memberId = "62d00ea03210a997c5acb3d9";
    const baseUrl = `http://localhost:4000/info/62d00ea03210a997c5acb3d9`;
    const _id = "62d00ea03210a997c5acb3d9";

    useEffect(() => {
        (async () => {
            const userInfo = await axios.get(baseUrl);
            setUserInfo(userInfo.data);
            console.log(userInfo);
        })();
    }, [])



    return (
        <>
            <div className="user_container">
                <div className="container_gelb">
                    <img
                        className="imgUser"
                        src={require("../img/avataaars.png")}
                        alt=""
                    />
                    {isLogged ? (userInfo.map((item, i) => {
                        return (
                            <>
                                <h3> Hallo {item.firstName}!</h3>
                            </>
                        )

                    })) : (<h3> Hallo user!</h3>)}

                    <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                </div>
                <div className="container_white">
                    <h2>Informationen</h2>
                    <div className="textInfo">

                        {isLogged ? (
                            userInfo.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <p><b>Vorname: </b>{item.firstName} </p>
                                        <p><b>Nachname: </b>{item.lastName} </p>
                                        <p><b>Kurse:</b></p>
                                        {item.course_ids.map((c, i) => {

                                            return (
                                                <li key={i}>
                                                    {c.course_name}
                                                </li>

                                            )

                                        })}

                                        <p><b>Geräte:</b></p>
                                        {item.device_ids.map((d, i) => {

                                            return (
                                                <li key={i}>
                                                    {d.device_name}
                                                </li>

                                            )

                                        })}

                                        {/* <p><b>Geräte:</b> {item.device_name}</p> */}
                                    </div>
                                )
                            })
                        ) : (
                            <div className="login">
                                <h3>Logg dich bitte ein!</h3>
                                <a href="/login">Einloggen</a>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </>
    )
}

export default UserInfo;