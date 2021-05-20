import React from 'react';


export class MovieView extends React.Component {

    
    render(){
        const {movie, onBackClick } = this.props
        return(
        <div className="movie-view">
            <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value">{movie.title}</span>
            </div>
            <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.description}</span>
            </div>
            <div className="movie-view">
                <div className="movie-poster">
                    <img src="{movie.image}"/>
                </div>
            </div>
            <button onClick={() => { onBackClick(null); }}>Back</button>

        </div>)
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


