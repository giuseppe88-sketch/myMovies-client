import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export class DirectorView extends React.Component{
    render(){
        const {directorData } = this.props;

        return(
            <div className="director-view">
               
            <Card border="dark" className="mb-3" className="mt-4">
             <Card.Body>
             <Card.Title><span className='text-primary'>Name: </span> {directorData.name}</Card.Title>
            <Card.Text><span className='text-primary'>Bio: </span>{directorData.bio}</Card.Text>
            <Card.Text><span className='text-primary'>Birth: </span>{directorData.birthYear}</Card.Text>
            <Link to={`/`}>
                   <Button>Back</Button>
               </Link>
             </Card.Body>
             </Card>
    

            </div>
        )
    }
}