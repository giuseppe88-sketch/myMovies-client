import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { FormGroup, Label, Input} from 'reactstrap';
import { FacebookLoginButton }  from 'react-social-login-buttons';
 

import './login-view.scss';

export function LoginView(props){
    const [username, setUsername ] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState({});
    const [passwordError, setPasswordError] = useState({});
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        console.log(username, password);
        /* Send a request to the server for authentication */
        if (isValid) {
        axios.post('https://mymovies-db-api.herokuapp.com/login',{
          username:username,
          password:password
        })
        .then(response=>{
          const data = response.data;
         props.onLoggedIn(data);
        })
        .catch(e => {
          console.log('no such user')
        });
    /*then call props.onLoggedIn(username)
        props.onLoggedIn(username);*/
    };
   }
   const formValidation = () => {
    const usernameError = {};
    const passwordError = {};
    let isValid = true;

    if (username.trim().length < 5) {
      usernameError.usernameShort ='Username must be at least 5 characters';
      isValid =false;
    }

    if (password.trim().length === 0) {
      passwordError.passwordRequired = 'Password is required';
      isValid = false;
    }

    if (password.trim().length < 6) {
      passwordError.passwordMissing = 'Password must be at least 6 characters';
      isValid = false;
    }

    setUsernameError(usernameError);
    setPasswordError(passwordError);
    return isValid;
  };

    return (
     
    <Form className="form-label">
    <h1>
       <span className="font-weight-bold">myMovies</span>.com
   </h1>
   <h2>Welcome</h2>
      <Form.Group controlId="formUsername">
        <Label>Username: </Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group> 

      {Object.keys(usernameError).map((key) => {
        return (
          <div key={key} style={{ color: "red" }} className ='alert'>{usernameError[key]} </div>
        );
      })}
      <Form.Group controlId="formPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      {Object.keys(passwordError).map((key) => {
          return (
          <div key={key} style={{ color: "red" }} className='alert'>{passwordError[key]}</div>  
        );
      })}
      <Button className="btn-lg btn-dark btn-block" variant="dark" type="submit" onClick={handleSubmit}>
        Log in
      </Button>
      
    <div className="text-center">
        <Link to={`/register`}>
      Sign up 
      </Link>
      <span className="p-2">|</span>
      <Link to={`/register`}>
      Forgot password
      </Link>
    </div>
      <div className="text-center pt-3">
        or continue with your social account
      </div>
      <FacebookLoginButton className="mt-4 mb-4"/>
  </Form>
  
  
    );
}
LoginView.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired,
  };