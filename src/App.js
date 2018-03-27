import React, { Component } from 'react';
import logo from './logo.svg';
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


class App extends Component {

state = {
  player1:"",
  player2:""
}

setUser = (user) => {
   this.setState({currentUser: user})
 }

 createUser = (newUser) => {
   const options = {
     method: 'post',
     headers: {
       "Content-Type": 'application/json',
       Accepts: 'application/json'
     },
     body: JSON.stringify({ "user": {"username": newUser.username, "password": newUser.password} })
   }

   fetch('http://localhost:3000/users', options)
     .then(res => res.json())
     .then(user => this.setState({currentUser: user}))
 }




  render() {

    return (
      <Router>
      <div className="App">
        < NavBar/>
         <Route path="/game" component={ColoredRect}/>
         <Route path="/playerstats" component={PlayerStats}/>
         <Route path="/players" render={()=><LoginPage create={this.createUsers}/>}/>
         <Route path="/instructions" component={Instructions}/>


      </div>
      </Router>
    );
  }
}

export default App;


 // <Route path="/playerstats" component={PlayerStats}/>
