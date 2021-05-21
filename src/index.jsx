import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
//need to bundle `./index.scss`
import './index.scss';

//Main component

class MyMoviesApplication extends React.Component {
    render(){
        return (
    <Container >    
        <MainView />
    </Container>
        );
    }
}

// Finds root of my app
const container = document.getElementsByClassName('app-container')[0];

//tells react to render your app in the root DOM element
ReactDOM.render(React.createElement(MyMoviesApplication),container);