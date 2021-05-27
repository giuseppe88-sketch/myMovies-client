import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';




    export class ProfileView extends React.Component{
        render(){
            const { userData }= this.props;
    
            return (
              
                <Card border="light" className="mb-4" className="mt-3">
                  
                  <Card.Body>
                    <Card.Title>{userData.favotitesMovies}</Card.Title>
                    
                  </Card.Body>
                </Card>
               
              );
        }
    }
