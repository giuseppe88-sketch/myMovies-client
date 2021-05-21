import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export class MovieView extends React.Component {

    
    render(){
        const {movie, onBackClick } = this.props
        return(
           <Card border="light" className="mt-3">
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Title>Rating: {movie.Rating}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button onClick={() => onBackClick(null)} variant="link" variant="dark">Back</Button>
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


