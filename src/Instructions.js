import React from "react"
import "./css/text.css"

class Instructions extends React.Component{
  render(){
    return(
      <div className="text">
        <h1 className="title">How to play:</h1>
        <p>1. Decide who is going to be the first player.</p>
        <p>2. Click on the button that says "Roll the Dice". The white dice will tell you how many spaces your token is going to move.</p>
        <p>3. If you hit a snake's head you will go down, but if you hit a ladder you will go up.</p>
        <p>4. The first player that gets to 100 will win the game.</p>
      </div>
    )
  }
}


export default Instructions
