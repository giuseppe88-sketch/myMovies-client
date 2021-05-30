import React, { useState} from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FacebookLoginButton }  from 'react-social-login-buttons';

import './registration-view.scss';

export function RegistrationView(props){
     
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail]      =  useState('');
    const [usernameError, setUsernameError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const [emailError, setEmailError] = useState({});
  

    const submitRequest = (e) => {
      e.preventDefault();
      const isValid = formValidation();
      if(isValid){
      axios.post('https://mymovies-db-api.herokuapp.com/users', {
        username: username,
        password: password,
        email: email, 
       // birthdate: birthdate
      })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
      })
      .catch(e => {
        console.log('error registering the user')
      });
        console.log(username, password, email);
        /* Send a request to the server for authentication */
    /*then call props.onLoggedIn(username) */
        props.onRegisterIn(username);
    };
}
const formValidation = () => {
  const usernameError = {};
  const passwordError = {};
  const emailError = {};
  let isValid = true;

  if (username.trim().length < 5) {
    usernameError.usernameShort = ' Username must be at least 5 characters';
    isValid = false;
  }

  if (password.trim().length === 0) {
    passwordError.passwordMissing = 'Password is required';
    isValid = false;
  }

  if (password.trim().length < 6) {
    passwordError.passwordMissing = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (!email.includes('.') && !email.includes('@')) {
    emailError.notEmail = 'Enter a valid email';
    isValid = false;
  }

  setUsernameError(usernameError);
  setPasswordError(passwordError);
  setEmailError(emailError);
  return isValid;
};

        return (
  <div className="registration-view">
    <Form className="form-registration">
      <h1>
      <span className="font-weight-bold">myMovies</span>.com
      </h1>
      <h2>Sign up</h2>
      
        <Form.Group controlId="formUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)}/>
        </Form.Group>
        {Object.keys(usernameError).map((key) => {
        return (
          <div className ='alert' style={{ color: "red" }} key={key} >{usernameError[key]}</div>
        );
      })}
        <Form.Group controlId="formPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        {Object.keys(passwordError).map((key) => {
        return (
          <div className ='alert' style={{ color: "red" }} key = {key} >{passwordError[key]}</div>
        );
      })}
        <Form.Group  controlId="formEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        {Object.keys(emailError).map((key) => {
        return (
          <div className ='alert' style={{ color: "red" }} key={key}>{emailError[key]} </div>
        );
      })}
        <Button className="btn-lg btn-dark btn-block" variant="dark" type="submit" onClick={submitRequest}>
          Submit
        </Button>
        <div className="text-center">
        <Link to={`/`}>
       Log in
      </Link>
    </div>
    <FacebookLoginButton className="mt-4 mb-4"/>
    </Form>
  </div>
  );
        

    
}
RegistrationView.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
    onRegisterIn: PropTypes.func.isRequired,
  };
