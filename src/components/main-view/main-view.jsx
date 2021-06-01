import React from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from "react-router-dom";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './main-view.scss';


import { RegistrationView} from '../registration-view/registration-view' 
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView} from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView }   from '../genre-view/genre-view';
import { ActorView }   from '../actor-view/actor-view';
import { ProfileView }  from '../profile-view/profile-view';
import { UpdateViewProfile } from '../profile-view/profile-update';
import { Navbar,Nav } from 'react-bootstrap';

export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user:null,
            directors:[],
            genres:[],
            actors:[],
            favoritesMovies:[]
            }
    }
    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        if(accessToken !== null){
            this.setState({
                user:localStorage.getItem('user')
            });
            this.getMovies(accessToken);
            this.getDirectors(accessToken);
            this.getGenres(accessToken);
            this.getActors(accessToken);
            this.getUsersFav(accessToken);
            
            
        }
        
       
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
       onUpdate(user){
           this.setState({
               user
           })
       }
       onLoggedIn(authData){
           console.log(authData);
           this.setState({
               user:authData.user.username
           });
           localStorage.setItem('token',authData.token);
           localStorage.setItem('user',authData.user.username);
           this.getMovies(authData.token);
           this.getDirectors(authData.token);
           this.getGenres(authData.token);
           this.getActors(authData.token);
           this.getUsersFav(authData.token);
          
       }
       onLoggedOut(){
           localStorage.removeItem('token');
           localStorage.removeItem('user');
           this.setState({
               user:null
           });
       }
       getMovies(token){
           axios.get('https://mymovies-db-api.herokuapp.com/movies',{
               headers:{ Authorization: `Bearer ${token}`}
           })
           .then(response=> {
              // assign result to the state
              this.setState({
                  movies:response.data
              });
              
           })
           .catch(function(error){
               console.log(error)
           })
       }
       getDirectors(token){
        axios.get('https://mymovies-db-api.herokuapp.com/directors',{
            headers:{ Authorization: `Bearer ${token}`}
        })
        .then(response=> {
           // assign result to the state
           this.setState({
               directors:response.data
               
           });
           //console.log(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    getGenres(token){
        axios.get('https://mymovies-db-api.herokuapp.com/genres',{
            headers:{ Authorization: `Bearer ${token}`}
        })
        .then(response=> {
           // assign result to the state
           this.setState({
               genres:response.data
            });
            console.log(response.data)
           
        })
        .catch(function(error){
            console.log(error)
        })
    } 
    getActors(token){
        axios.get('https://mymovies-db-api.herokuapp.com/actors',{
            headers:{ Authorization: `Bearer ${token}`}
        })
        .then(response=> {
           // assign result to the state
           this.setState({
               actors:response.data
            });
            console.log(response.data)
           
        })
        .catch(function(error){
            console.log(error)
        })
    }
    getUsersFav(token){
        axios.get('https://mymovies-db-api.herokuapp.com/users/'+ localStorage.getItem('user'), {
            headers:{ Authorization: `Bearer ${token}`}
        })
        .then(response=>{
            this.setState({
                favoritesMovies:response.data.favoritesMovies})
              //console.log(response.data)
        })
    }
    
     
       
    render(){
        const { movies, user, directors, genres, actors, favoritesMovies} = this.state;
        
        return (
            <Router>
                <Switch>
                <Route exact path="/" render={() => {
               if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if(user) return <Redirect to="/movies"/>
               }} />
               <Route path="/register" render={() => {
                if (user) return <Redirect to="/" /> 
                return <Col>
                <RegistrationView onRegisterIn={user=> this.onRegisterIn(user)}/>
                   </Col>
              }} />

<>
             <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
       <Navbar.Brand>
         <img src="https://pad.mymovies.it/v12/img/mymovies.png" width="140px"/>{" "}
         
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
       <Link to={`/register`}>
                   <Button variant="link">Movies</Button>
               </Link>
               <Link to={`/directors`}>
                   <Button variant="link">Directors</Button>
               </Link>
               <Link to={`/actors`}>
                   <Button variant="link">Actors</Button>
               </Link> 
               <Link to={`/genres`}>
                   <Button variant="link">Genres</Button>
               </Link>
               <Link to={`/users`}>
                   <Button variant="link">myFavorites</Button>
               </Link> 
               <Link to={`/users/update`}>
                   <Button variant="link">Update</Button>
               </Link> 
               <Link to={`/`}>
                   <Button variant="primary" className='primary-btn' onClick={()=> this.onLoggedOut()}><span className='text-color'>Logout</span></Button>
               </Link> 
        </Navbar.Collapse>
    </Navbar>
            <Row className="main-view justify-content-md-center">
           <Route exact path="/" render={() => {
               if (!user) return <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
               }} />
            <Route exact path="/movies" render={()=>{
                if (movies.length === 0) return <div className="main-view" />;
                return movies.map(m => (
                    <Col md={3} key={m._id}>
                  <MovieCard movieData={m} />
                  </Col>
                ))
            }} />
                <Route path="/movies/:movieId" render={({ match }) => {
                    if(!user) return <Col>
                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                    </Col>
                    if(movies.length ===0) return <div className="main-view" />
                    return <Col md={8}>
                  <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                </Col>
              }} />
               <Route path="/directors/:name" render={({ match }) => {
                   if(!user) return <Col> 
                   <LoginView onLoggedIn={user=> this.onLoggedIn(user)}/>
                   </Col>
                   if (movies.length === 0) return <div className="main-view" />;
                   return <Col md={8}>
                  <DirectorView director={directors.find(m => m.directors.name === match.params.name).directors} onBackClick={() => history.goBack()}/>
                </Col>
              }
            }/>
            <Route exact path="/directors" render={() => {
                
                console.log(directors)
                return directors.map(m => (
                    <Col md={3} key={m._id}>
                    <DirectorView directorData={m} />
                 </Col>
                 
                 ))
                } }/>
             <Route exact path="/genres" render={() => {
                 console.log(genres)
                    return genres.map(m => (
                        <Col md={3} key={m._id}>
                    <GenreView genresData={m} />
                 </Col>
                 
                 ))
                } }/>
             
            <Route path="/genres/:name" render={({ match, history }) => {
                if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <GenreView genre={movies.find(m => m.genre.name === match.params.name).genre} onBackClick={() => history.goBack()} />
            </Col>
          }
        } />
          <Route exact path="/actors" render={() => {
              console.log(actors)
              return actors.map(m => (
                  <Col md={3} key={m._id}>
                    <ActorView actorsData={m} />
                 </Col>
                
                ))
            } }/>
             <Route exact path="/users" render={()=>{
                 console.log(favoritesMovies)
                 return favoritesMovies.map(m => (
                     <Col md={9} key={m._id}>
                      <ProfileView favoriteData={m}/>
                      </Col>
                    ))}} />
             
            <Route exact path="/users/update" render={() => { 
                return <Col>
                   <UpdateViewProfile onUpdate={user=> this.onUpdate(user)}/>
                      </Col>
                 }} />
           
                 </Row>
 </>
                 </Switch>
        </Router>
        );
    }
}