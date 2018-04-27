import React, { Component } from 'react';

import ColoredRect from "./ColoredRect"
import NavBar from "./Nav"
// import { Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Instructions from "./Instructions"
import { Route, Redirect } from 'react-router-dom'

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
