import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/login.css";

export const Login = () => {
    return (
        <div className='loginContainer d-flex flex-column justify-content-center'>
            <h1> Einloggen</h1>
            <Form className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <i class="fa-regular fa-envelope"></i>
                    < Form.Control type="email" placeholder="Email:" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <i class="fa-solid fa-lock"></i> <Form.Control type="password" placeholder="Password:" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button className="d-flex justify-content-center align-items-center" variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    )

}