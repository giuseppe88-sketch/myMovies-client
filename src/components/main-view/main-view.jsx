import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { RegistrationView} from '../registration-view/registration-view' 
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView} from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user:null
        }
    }
    componentDidMount(){
        axios.get('https://mymovies-db-api.herokuapp.com/movies')
        .then(response=>{
            this.setState({
                movies:response.data
            });
        })
        .catch(error =>{
            console.log(error)
        });
    }
       setSelectedMovie(newSelectedMovie){
           this.setState({
               selectedMovie:newSelectedMovie
           });
       }
       onRegisterIn(user){
           this.setState({
               user
           })
       }
       onLoggedIn(user){
           this.setState({
               user
           })
       }
    render(){
        const { movies, selectedMovie, user } = this.state;
        
        if (!user) return <RegistrationView onRegisterIn = {user => this.onRegisterIn(user)}/>
        if(!user) return <LoginView onLoggedIn = {user => this.onLoggedIn(user)} />

        if (movies.length === 0 ) return <div className= "main-view">The list is empty!</div>;
        

        return (
            <div className="main-view">
                {selectedMovie ? 
                ( <Row className="justify-content-md-center"> 
                    <Col md={4}>
                    <MovieView movie= {selectedMovie} onBackClick={newSelectedMovie => {this.setSelectedMovie(newSelectedMovie);}}/>
                    </Col>
                  </Row> )
                : 
                ( <Row className="justify-content-md-center">
                { movies.map(movie=> 
                ( <Col md={4}>
                <MovieCard key={movie._id} movieData = {movie}  onMovieClick = {(movie)=>{this.setSelectedMovie(movie);}} />
                </Col> ))}
                </Row> 
                )
             }
            </div>
        );
    }
}