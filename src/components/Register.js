import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/register.css';
import { useState, useEffect } from "react";
import axios from "axios";
export const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
    mobile: "",
    age: "",
    accountNumber: "",
    address: {
      street: "",
      number: "",
      city: "",
      zip: ""
    }
  }



  const [formValues, setFormValues] = useState(initialValues);

  console.log(formValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleAddressChange = (e) => {
    var key = e.target.name;
    var value = e.target.value;
    console.log("key: ", key);
    console.log("value: ", value);
    console.log(formValues);
    const newObj = formValues;
    newObj.address[key] = value;
    // addressForm.streetNumber = address;
    setFormValues({ ...formValues, address: newObj.address })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const data = await axios.post("http://localhost:4000/register", formValues);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "Vorname ist benötigt!";
    }

    if (!values.lastName) {
      errors.lastName = "Nachname ist benötigt!";
    }
    if (!values.email) {
      errors.email = "Email ist benötigt!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email hat ungültiges Format!";
    }

    if (!values.password) {
      errors.password = "Passwort ist benötigt!";
    }

    else if (values.password.length < 5) {
      errors.password = "Passwort sollte mindestens 5 Zeichen haben!";
    }

    if (!values.repassword) {
      errors.repassword = "Bitte Passwort wiederholen!";
    }

    else if (!values.address.street) {
      errors.street = "Straße ist benötigt!";
    }

    else if (!values.address.number) {
      errors.number = "Hausnummer ist benötigt!";
    }

    else if (!values.address.city) {
      errors.city = "Stadt ist benötigt!";
    }

    else if (!values.address.zip) {
      errors.zip = "PLZ ist benötigt!";
    }
    return errors;
  }


  return (
    <>
      <div className="register-container">
        <h1 className='h1_register'> Registrieren</h1>
        <h3>Persönliche Daten</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <i className="fa-solid fa-user icon"> </i>
            <Form.Control type="text" placeholder="Vorname:" name="firstName" value={formValues.firstName} onChange={handleChange} />
          </Form.Group>

          <p className="p-alert">{formErrors.firstName}</p>

          <Form.Group className="mb-3">
            <i className="fa-solid fa-user icon"></i>

            <Form.Control type="text" placeholder="Nachname:" name="lastName" value={formValues.lastName}
              onChange={handleChange} />
          </Form.Group>

          <p className="p-alert">{formErrors.lastName}</p>

          <Form.Group className="mb-3">
            <i className="fa-solid fa-person icon"></i>

            <Form.Control type="number" placeholder="Alter:" name="age" value={formValues.age} onChange={handleChange} />

            <Form.Group className="mb-3">

              <i className="fa-regular fa-envelope icon"></i>

              <Form.Control type="email" placeholder="Email:" name="email" value={formValues.email} onChange={handleChange} />
            </Form.Group>

            <p className="p-alert">{formErrors.email}</p>

            <Form.Group className="mb-3">

              <i className="fa-solid fa-lock icon"></i>
              <Form.Control type="password" placeholder="Passwort:" name="password" value={formValues.password} onChange={handleChange} />
            </Form.Group>

            <p className="p-alert">{formErrors.password}</p>

            <Form.Group className="mb-3">
              <i className="fa-solid fa-triangle-exclamation icon"> </i>
              <Form.Control type="password" placeholder="Passwort bestätigen:" name="repassword" value={formValues.repassword} onChange={handleChange} />
            </Form.Group>

            <p className="p-alert">{formErrors.repassword}</p>

            <Form.Group className="mb-3">
              <i className="fa-solid fa-phone icon"></i>

              <Form.Control type="text" placeholder="Tel.:" name="mobile" value={formValues.mobile} onChange={handleChange} />

            </Form.Group>

            <Form.Group className="mb-3">
              <i className="fa-solid fa-sack-dollar icon"></i>

              <Form.Control type="text" placeholder="Bankverbindung:" name="accountNumber" value={formValues.accountNumber} onChange={handleChange} />

            </Form.Group>

          </Form.Group>
          <h3 className="adresseH3"> Adresse:</h3>
          <Form.Group className="mb-3">
            <i className="fa-solid fa-road icon"></i>
            <Form.Control type="text" placeholder="Straße:" name="street" value={formValues.address.street} onChange={handleAddressChange} />
          </Form.Group>

          <p className="p-alert">{formErrors.street}</p>

          <Form.Group className="mb-3">

            <i className="fa-solid fa-house-chimney-user icon"></i>
            <Form.Control type="number" placeholder="Hausnummer:" name="number" value={formValues.number} onChange={handleAddressChange} />
          </Form.Group>

          <p className="p-alert">{formErrors.number}</p>

          <Form.Group className="mb-3">
            <i className="fa-solid fa-city icon"></i>

            <Form.Control type="text" placeholder="Stadt:" name="city" value={formValues.city} onChange={handleAddressChange} />

          </Form.Group>

          <p className="p-alert">{formErrors.city}</p>

          <Form.Group className="mb-3">

            <i className="fa-solid fa-list-ol icon"></i>
            <Form.Control type="number" placeholder="PLZ:" name="zip" value={formValues.zip} onChange={handleAddressChange} />
          </Form.Group>

          <p className="p-alert">{formErrors.zip}</p>

          {/* <Button variant="primary" type="submit" onSubmit={handleSubmit}> */}
          <Button variant="primary" type="submit">
            Registrieren
          </Button>
        </Form>
      </div>
    </>
  );
}

