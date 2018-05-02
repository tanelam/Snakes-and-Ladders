import React, { Component } from 'react';

import ColoredRect from "./ColoredRect"
import NavBar from "./Nav"
import Instructions from "./Instructions"
import Home from "./Home"

import { Route, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom"


class App extends Component {


  render() {

    return (
      <Router>
      <div className="App">
        < NavBar/>
      <Route exact path="/" component={Home}/>
         <Route exact path="/game" component={ColoredRect}/>
         <Route exact path="/instructions" component={Instructions}/>
      </div>
      </Router>
    );
  }
}

export default App;
