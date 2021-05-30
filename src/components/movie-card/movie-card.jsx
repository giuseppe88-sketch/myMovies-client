import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navbar , Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './movie-card.scss';

export class MovieCard extends React.Component{
    render(){
      
      const { movieData }= this.props;
        return (
         
        <div> 
            <Card border="light" className="mb-4" className="mt-3">
              <Card.Img variant="top" src={movieData.image} />
              <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text>{movieData.description}</Card.Text>
                <Link to={`/movies/${movieData._id}`}>
                <Button variant="link">Open</Button>
                </Link>
              </Card.Body>
            </Card>
            </div>
          );
    }
}

MovieCard.propTypes= {
    movieData:PropTypes.shape({
        title:PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
       }).isRequired,
      // onMovieClick:PropTypes.func.isRequired
};