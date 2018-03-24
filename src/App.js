import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColoredRect from "./ColoredRect"
import NavBar from "./Nav"
import { Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import PlayerStats from "./PlayerStats"
import LoginForm from "./LoginForm"


class App extends Component {

state = {
  player1:"",
  player2:""
}

createUsers=(playerObj)=>{

   fetch("http://localhost:3000/users", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json"
     },
     body: JSON.stringify( {"user":{"username": playerObj.player1}})
   })
   .then(res=>res.json())
   .then(json=>this.setState({
     player1: json
   }))
   fetch("http://localhost:3000/users", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json"
     },
     body: JSON.stringify( {"user":{"username": playerObj.player2}})
   })
   .then(res=>res.json())
   .then(json=>this.setState({
     player2: json
   }))

}

  render() {

    return (
      <Router>
      <div className="App">
        < NavBar/>
         <Route path="/game" component={ColoredRect}/>
         <Route path="/playerstats" component={PlayerStats}/>
         <Route path="/login" render={()=><LoginForm create={this.createUsers}/>}/>


      </div>
      </Router>
    );
  }
}

export default App;


 // <Route path="/playerstats" component={PlayerStats}/>
