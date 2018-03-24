import React, { Component } from "react"


class LoginForm extends Component {

state = {
  player1:"",
  player2:""
}

handleSubmit = (event) => {
  event.preventDefault()
  this.props.create(this.state)
  this.setState({
    player1:"",
    player2:""
  })
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}



  render() {
    
    return (

      <form onSubmit={this.handleSubmit}>
        <input type="text" name="player1" placeholder="Player One" onChange={this.handleChange} value={this.state.player1}/>
        <input type="text" name="player2" placeholder="Player Two" onChange={this.handleChange}value={this.state.player2}/>
        <input type="submit" />
      </form>

    )
  }
}

export default LoginForm
