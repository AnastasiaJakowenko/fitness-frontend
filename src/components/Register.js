import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/register.css';
import { useRef } from "react";
export const Register = () => {

  const inputRef = useRef();
  return (
    <>
      <div className="register-container">
          <div className='probe'>
        <h1 className='h1_register'> Registrieren</h1>
        <h3>Persönliche Daten</h3>
        <Form action="http://localhost:4000/register" method="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-user icon"> </i>
            <Form.Control type="text" placeholder="Vorname:" name="firstName" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-user icon"></i>

            <Form.Control type="text" placeholder="Nachname:" name="lastName" ref={inputRef} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-person icon"></i>

            <Form.Control type="number" placeholder="Alter:" name="age" ref={inputRef} />

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <i className="fa-regular fa-envelope icon"></i>

            <Form.Control type="email" placeholder="Email:" name="email" ref={inputRef} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <i className="fa-solid fa-lock icon"></i>
            <Form.Control type="password" placeholder="Passwort:" name="password" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <i className="fa-solid fa-triangle-exclamation icon"> </i>
            <Form.Control type="password" placeholder="Passwort bestätigen:" name="repassword" ref={inputRef} />
          </Form.Group>


          </Form.Group>
          <h3 className="adresseH3"> Adresse:</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-road icon"></i>
            <Form.Control type="text" placeholder="Straße:" name="address.street" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <i className="fa-solid fa-house-chimney-user icon"></i>
            <Form.Control type="text" placeholder="Hausnummer:" name="address.number" ref={inputRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-city icon"></i>

            <Form.Control type="text" placeholder="Stadt:" name="address.city" ref={inputRef} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <i className="fa-solid fa-list-ol icon"></i>
            <Form.Control type="number" placeholder="PLZ:" name="address.zip" ref={inputRef} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrieren

          </Button>
        </Form>
        </div>
      </div>
    </>
  );
}

