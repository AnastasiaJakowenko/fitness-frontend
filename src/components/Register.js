import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/register.css";
import { useRef } from "react";
export const Register = () => {

  const inputRef = useRef();

  return (
    <>
      <div className='register-container'>
        <h1> Register</h1>
        <Form action="http://localhost:4001/register" method="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Vorname:" name="firstName" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Nachname:" name="lastName" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email:" name="email" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password (mindestens 5 Zeichen):" name="password" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password bestätigen:" name="repassword" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="number" placeholder="Alter:" name="age" ref={inputRef} />
          </Form.Group>

          <h2> Adresse:</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Straße:" name="address.street" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Hausnummer:" name="address.number" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Stadt:" name="address.city" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="number" placeholder="PLZ:" name="address.zip" ref={inputRef} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

