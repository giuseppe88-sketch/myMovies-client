import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export function LoginView(props){
    const [username, setUsername ] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
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

    return (
    
    <Form className="form-label">
    <h2>Log in</h2>
      <Form.Group controlId="formUsername">
        <Form.Label>Username: </Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="dark" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
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