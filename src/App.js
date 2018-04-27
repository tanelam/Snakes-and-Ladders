import React, { Component } from 'react';

import './App.css';
import ColoredRect from "./ColoredRect"
import NavBar from "./Nav"
// import { Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import PlayerStats from "./PlayerStats"
import LoginPage from "./LoginPage"
import Instructions from "./Instructions"
import LoginContainer from './Login';
import { Route, Redirect } from 'react-router-dom'
import ConversationsList from './ConversationsList';

class App extends Component {


  render() {

    return (
      <Router>
      <div className="App">
        < NavBar/>
         <Route path="/game" component={ColoredRect}/>
         <Route path="/instructions" component={Instructions}/>
      </div>
      </Router>
    );
  }
}

export default App;
