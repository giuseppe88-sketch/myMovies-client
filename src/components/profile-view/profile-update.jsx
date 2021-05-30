import React, { useState} from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export function UpdateViewProfile(props){
     
    const [username,setUsername] = useState('user.username');
    const [password,setPassword] = useState('');
    const [email,setEmail]      =  useState('user.email');
    
    const [usernameError, setUsernameError] = useState({});
    const [passwordError, setPasswordError] = useState({});
    const [emailError, setEmailError] = useState({});

    const updateRequest = (e) => {
      e.preventDefault();
      const isValid = formValidation();
      if (isValid) {
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
        console.log('error updating the user')
      });
        console.log(username, password, email);
        /* Send a request to the server for authentication */
    /*then call props.onLoggedIn(username) */
        props.onUpdate(username);
    };
  }
  const formValidation = () => {
    const usernameError = {};
    const passwordError = {};
    const emailError = {};
    let isValid = true;

    if (username.trim().length < 5) {
      usernameError.usernameShort = "Username must be at least 5 characters";
      isValid = false;
    }

    if (password.trim().length < 1) {
      passwordError.passwordMissing = "You must enter a password";
      isValid = false;
    }

    if (!email.includes(".") && !email.includes("@")) {
      emailError.emailNotEmail = "A valid email address is required";
      isValid = false;
    }

    setUsernameError(usernameError);
    setPasswordError(passwordError);
    setEmailError(emailError);
    return isValid;
  };
    const deleteRequest = e => {
        e.preventDefault();
        axios
          .delete(`https://mymovies-db-api.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
          })
          .then(response => {
            alert('Your account has been deleted');
            localStorage.clear();
            window.open('/', '_self');
          })
          .catch(e => {
            console.log('Error deleting your account');
          });
      };

        return (
  <div className="registration-view">
    <Form className="form-label">
      <h2>Update here your details</h2>
      
        <Form.Group controlId="formUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        {Object.keys(usernameError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {usernameError[key]}
              </div>
            );
          })}
        <Form.Group controlId="formPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        {Object.keys(passwordError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {passwordError[key]}
              </div>
            );
          })}
        <Form.Group  controlId="formEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        {Object.keys(emailError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {emailError[key]}
              </div>
            );
          })}
        <Button className="btn-lg btn-dark btn-block" variant="dark" type="submit" onClick={updateRequest}>
          Submit
        </Button>
        <Button className="btn-lg btn-block" variant='danger' type='submit' onClick={deleteRequest}><span className='text-color'>Delete Profile</span></Button>
    </Form>
  </div>
  );
        

    
}