import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { MainView } from './components/main-view/main-view';
//need to bundle `./index.scss`
import './index.scss';


const store = createStore(moviesApp,devToolsEnhancer());

//Main component

class MyMoviesApplication extends React.Component {
    render(){
        return (
<Provider store={store}>              
    <Container >    
        <MainView />
    </Container>
 </Provider>  
        );
    }
}

// Finds root of my app
const container = document.getElementsByClassName('app-container')[0];

//tells react to render your app in the root DOM element
ReactDOM.render(React.createElement(MyMoviesApplication),container);