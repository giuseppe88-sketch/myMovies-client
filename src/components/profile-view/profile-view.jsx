import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Navbar } from 'react-bootstrap';


export class ProfileView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          favoriteMovies: []
          
        };
    }
    render(){

        const { favoriteData } = this.props;

      return(
          <div>
            <Card border="light" bg="dark" text="white" className="mb-4" className="mt-3">
            <Card.Body>
              <Card.Title>{favoriteData}</Card.Title>
              <Button>Delete</Button>
            </Card.Body>
          </Card>
          </div> 
        )
    } 
    
}