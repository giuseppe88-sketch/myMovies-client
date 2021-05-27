import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export class GenreView extends React.Component{
    render(){
        const {genresData } = this.props;

        return(
            <div className="genres-view">
            <Card border="dark" className="mb-3" className="mt-4">
             <Card.Body>
             <Card.Title><span className='text-primary'>Name: </span> {genresData.name}</Card.Title>
            <Card.Text><span className='text-primary'>Bio: </span>{genresData.description}</Card.Text>
            <Link to={`/`}>
                   <Button>Back</Button>
               </Link>
             </Card.Body>
             </Card>
    

            </div>
        ) 
    }
}