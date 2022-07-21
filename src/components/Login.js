import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/login.css";
import { LoginContext } from '../context/loginContext.js';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const Login = () => {

    const [isLogged, setIsLogged] = useContext(LoginContext);
    const [isSubmit, setIsSubmit] = useState(false);
    const [input, setInput] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLogged(!isLogged);
        setIsSubmit(!isSubmit);

        try {
            await axios.post("http://localhost:4000/login", input, { withCredentials: true });
            navigate('/');
        }
        catch (error) {
            console.error(error.response?.data?.error || error);
        }
    }

    return (

        <div className='loginContainer'>
            <h1> Einloggen</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <i className="fa-regular fa-envelope icon"></i>
                    < Form.Control name="email" type="email" value={input.email} placeholder="Email:" onChange={(e) => inputHandler(e)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <i className="fa-solid fa-lock icon"></i> <Form.Control type="password" placeholder="Password:" name="password" value={input.password} onChange={(e) => inputHandler(e)} />
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