import React from 'react';

import {MovieCard } from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [
                {_id: 1, Title: 'The Godfather' , Description:''},
                {_id: 2, Title: 'Psycho', Description: 'desc1..', ImagePath: '...'},
                {_id: 3, Title: 'Only lovers left alive', Description: 'desc1..', ImagePath: '...'},
            ],
            selectedMovie: null
        }
    }
       setSelectedMovie(newSelectedMovie){
           this.setState({
               selectedMovie:newSelectedMovie
           });
       }
    render(){
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0 ) return <div className= "main-view">The list is empty!</div>;
        

        return (
            <div className="main-view">
                {selectedMovie ? <MovieView movie= {selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie);}}/>
                : movies.map(movie=> <MovieCard key={movie._id} movieData = {movie}  onMovieClick = {(movie) =>{this.setSelectedMovie(movie)}} />)}
            </div>
        );
    }
}