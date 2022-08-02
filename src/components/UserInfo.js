import "../style/userInfo.css"
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../context/loginContext.js";
import axios from "axios";

function UserInfo() {
    const { login, id } = useContext(LoginContext);
    const [isLogged] = login;
    const [userId, setUserId] = id;

    const baseUrl = `http://localhost:4000/info/`;
    const [userInfo, setUserInfo] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const showUserInfo = async () => {
            setUserId(userId.slice(3, userId.length - 1));
            const userInfo = await axios.get(`${baseUrl}${userId}`);
            setUserInfo(userInfo.data);
        }
        showUserInfo();
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
                                <h3 key={i}> Hallo {item.firstName}!</h3>
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