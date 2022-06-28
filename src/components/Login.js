import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/login.css";
import { useRef } from "react";

export const Login = () => {
    // const [isLogin, setIsLogin] = useState([]);
    const inputRef = useRef();
    // useEffect(() => {
    //     const HandleLogin = async () => {
    //         //new response
    //         const response = await axios.post("http://localhost:4001/login", { inputRef });
    //         setIsLogin(response.data);
    //     };
    //     HandleLogin();
    // }, []);


    return (
        <div className='loginContainer d-flex flex-column justify-content-center'>
            <h1> Einloggen</h1>
            <Form action="http://localhost:4001/login" method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <i className="fa-regular fa-envelope icon"></i>
                    < Form.Control name="email" type="email" ref={inputRef} placeholder="   Email:" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <i className="fa-solid fa-lock icon"></i> <Form.Control type="password" placeholder="   Password:" name="password" ref={inputRef} />
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