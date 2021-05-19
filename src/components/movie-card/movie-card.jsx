import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component{
    render(){
        const { movieData, onMovieClick } = this.props;
        return <div className="movie-card" onClick = {()=> {onMovieClick(movieData)}}>{movieData.title}</div>;
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