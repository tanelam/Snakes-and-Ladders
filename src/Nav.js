import React, { Component } from "react"
import  { Link, NavLink } from "react-router-dom"
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
      <ul>
      <li><NavLink to="/" activeClassName="active">Home</NavLink>  </li>
      <li><NavLink to="/game" activeClassName="active">Game</NavLink>  </li>
      <li> <NavLink to="/playerstats" activeClassName="active">Player Stats</NavLink> </li>
      <li> <NavLink to="/login" activeClassName="active">Login</NavLink> </li>
      <li> <NavLink to="/conversationslist" activeClassName="active">Messages</NavLink> </li>
      </ul>
      </div>
    )
  }
}


export default NavBar
