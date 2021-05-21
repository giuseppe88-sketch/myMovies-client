import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component{
    render(){
        const { movieData, onMovieClick } = this.props;

        return (
            <Card>
              <Card.Img variant="top" src={movieData.image} />
              <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text>{movieData.description}</Card.Text>
                <Button onClick={() => onMovieClick(movieData)} variant="link" variant="dark">Open</Button>
              </Card.Body>
            </Card>
          );
    }
}

MovieCard.propTypes= {
    movie:PropTypes.shape({
        title:PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genre:PropTypes.string.isRequired,
        director:PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
       }).isRequired,
       onMovieClick:PropTypes.func.isRequired
};