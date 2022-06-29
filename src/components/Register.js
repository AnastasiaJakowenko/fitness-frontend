import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/register.css';
export const Register = () => {
  return (
    <>
      <div className="register-container">

        <h1 className='h1_register'> Registrieren</h1>
        <h3>Persönliche Daten</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-user icon"> </i>
            <Form.Control type="text" placeholder="Vorname:" /> 
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-user icon"></i>

            <Form.Control type="text" placeholder="Nachname:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <i className="fa-regular fa-envelope icon"></i>
            
            <Form.Control type="email" placeholder="Email:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <i className="fa-solid fa-lock icon"></i>
            <Form.Control type="password" placeholder="Passwort:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <i className="fa-solid fa-triangle-exclamation icon"> </i>
            <Form.Control type="password" placeholder="Passwort bestätigen:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-person icon"></i>

            <Form.Control type="number" placeholder="Alter:" />
          </Form.Group>
          <h3 className="adresseH3"> Adresse:</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-road icon"></i>
            <Form.Control type="text" placeholder="Straße:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <i className="fa-solid fa-house-chimney-user icon"></i>
            <Form.Control type="text" placeholder="Hausnummer:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <i className="fa-solid fa-city icon"></i>

            <Form.Control type="text" placeholder="Stadt:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <i className="fa-solid fa-list-ol icon"></i>
            <Form.Control type="number" placeholder="PLZ:" />
          </Form.Group>


          <Button variant="primary" type="submit">
            Registrieren

          </Button>
        </Form>

      </div>
    </>
  );
}

