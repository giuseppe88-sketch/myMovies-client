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
    

    const updateRequest = (e) => {
      e.preventDefault();
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

        <Form.Group controlId="formPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group  controlId="formEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Button variant="dark" type="submit" onClick={updateRequest}>
          Submit
        </Button>
        <Button variant='danger' className='primary-btn' type='submit' onClick={deleteRequest}><span className='text-color'>Delete Profile</span></Button>
    </Form>
  </div>
  );
        

    
}