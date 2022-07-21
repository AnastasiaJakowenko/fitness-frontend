import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();


export const LoginContextProvider = (props) => {

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if (Cookies.get("isLogged"))
            setIsLogged(true);
    }, [])

    return (
        <LoginContext.Provider value={[isLogged, setIsLogged]}>
            {props.children}
        </LoginContext.Provider>
    );

}

export const LogoutContext = createContext();

export const LogoutContextProvider = (props) => {
    const navigate = useNavigate();

    const [isAuth, setIsAuth] = useState(false);
    // später token weg machen
    // const [token, setToken] = useState(false);
    const [isLogged, setIsLogged] = useContext(LoginContext);

    const logoutHandler = async () => {
        console.log("logout Handler");
        const response = await axios.post("http://localhost:4000/logout", {}, { withCredentials: true })
        console.log("responseInLoginContext", response);
        setIsLogged(false);

        Cookies.remove('email');
        navigate("/")
    };


    return (
        <LogoutContext.Provider value={{
            auth: [isAuth, setIsAuth],
            // tokenValue: [token, setToken],
            logout: logoutHandler
        }}>
            {props.children}
        </LogoutContext.Provider>
    );

}

