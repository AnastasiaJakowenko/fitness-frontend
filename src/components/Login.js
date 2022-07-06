import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/login.css";
import { useRef, useState } from "react";
import axios from 'axios';
export const Login = () => {
    const inputRef = useRef();
    // const [showPanel, setShowPanel] = useState(false);
    // const [isAuth, setIsAuth] = useState(false);
    // const [token, setToken] = useState('');


    // const logoutHandler = async () => {
    //     await axios.post("/logout")
    //     setIsAuth(false);
    //     setToken('');
    // }



    // const getUserPanel = async () => {
    //     try {
    //         const resp = await axios.get('/userPanel', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }
    //         );
    //         if (resp.data.success) {
    //             return resp.data;
    //         } else {
    //             return null;
    //         }
    //     } catch (error) {
    //         console.debug(error);
    //         return null;
    //     }
    // }


    return (
        <div className='loginContainer d-flex flex-column justify-content-center'>
            <h1> Einloggen</h1>
            <Form action="http://localhost:4000/login" method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <i className="fa-regular fa-envelope icon"></i>
                    < Form.Control name="email" type="email" ref={inputRef} placeholder="Email:" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <i className="fa-solid fa-lock icon"></i> <Form.Control type="password" placeholder="Password:" name="password" ref={inputRef} />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button type="submit" className="d-flex justify-content-center align-items-center" variant="primary" >
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    )

}