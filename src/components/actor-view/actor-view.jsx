import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export class ActorView extends React.Component{
    render(){
        const {actorsData } = this.props;
        
        return(
            <div className="actor-view">
            <Card border="dark" className="mb-3" className="mt-4">
             <Card.Body>
             <Card.Title><span className='text-primary'></span> {actorsData.name}</Card.Title>
            <Card.Text><span className='text-primary'></span>{actorsData.bio}</Card.Text>
            <Card.Text><span className='text-primary'></span>{actorsData.movies}</Card.Text>
            <Link to={`/`}>
                   <Button variant="link">Back</Button>
               </Link>
             </Card.Body> 
             </Card>
          </div>
        )
    }
}
 