import React, { Component } from "react"

class PlayerStats extends Component {

  state={
    player:[]
  }


componentDidMount() {
  fetch(`http://localhost:3000/users`)
  .then(res => res.json())

  .then(json => this.setState({
    player: json
  }))
}

  render () {
    const player = this.state.player.map(player=>{
      return (<h1> {player.username} </h1>)
    })
    return (
      <div>
       {player}
      </div>
    )
  }
}


export default PlayerStats



// <h4>this.state.player[0].wins</h4>
// <h4>this.state.player[0].losses</h4>
