import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

import { Link } from "react-router-dom";


export class MovieView extends React.Component {
    constructor() {
        super();
        this.state = {};
      }
    
    render(){
        const {movie, onBackClick } = this.props

        
        return(
           <Card border="light" className="mt-3" >
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title><span className='value font-italic'>{movie.title}</span></Card.Title>
                <Card.Title><Button variant="secondary"> Rating: {movie.Rating}</Button></Card.Title>
                <Card.Text><span className='value font-italic'>{movie.description}</span></Card.Text>
                <Card.Text><span className='value font-italic'>Director: {movie.director}</span></Card.Text>
                <Link to={`/directors/${movie.director}`}>
                   <Button variant="link"></Button>
               </Link>
               <Link to={`/genres/${movie.genre}`}>
                 <Button variant="link"></Button>
               </Link>
               <Link to={`/`}>
                   <Button variant="link">Back</Button>
               </Link>
              </Card.Body>
            </Card>
        )
    }
}
MovieView.propTypes={
    movie:PropTypes.shape({
        title:PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genre:PropTypes.string.isRequired,
        director:PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
       }).isRequired,
       onClick:PropTypes.func.isRequired
};


