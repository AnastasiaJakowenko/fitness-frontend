import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/login.css";
import axios from 'axios';
import { useState, useEffect, useRef } from "react";

export const Login = () => {
    const [isLogin, setIsLogin] = useState([]);
    const inputRef = useRef();
    useEffect(() => {
        const HandleLogin = async () => {
            //new response
            const response = await axios.post("http://localhost:4001/login", { inputRef });
            setIsLogin(response.data);
        };
        HandleLogin();
    }, []);


    return (
        <div className='loginContainer d-flex flex-column justify-content-center'>
            <h1> Einloggen</h1>
            <Form method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <i class="fa-regular fa-envelope"></i>
                    < Form.Control name="email" type="email" ref={inputRef} placeholder="Email:" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <i class="fa-solid fa-lock"></i> <Form.Control type="password" placeholder="Password:" name="password" ref={inputRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
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