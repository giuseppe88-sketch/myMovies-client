import React, { useState} from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function RegistrationView(props){
     
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail]      =  useState('');
    

    const submitRequest = (e) => {
        e.preventDefault();
        console.log(username, password, email);
        /* Send a request to the server for authentication */
    /*then call props.onLoggedIn(username) */
        props.onRegisterIn(username);
    };


        return (
    <Form className="form-label">
      <h2>Sign up</h2>
        <Form.Group controlId="formUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Button variant="dark" type="submit" onClick={submitRequest}>
          Submit
        </Button>
    </Form>
    
  );
        

    
}
RegistrationView.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
    onRegisterIn: PropTypes.func.isRequired,
  };
