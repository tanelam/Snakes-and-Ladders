import React from "react"

class Instructions extends React.Component{
  render(){
      return(
        <div className="instructions-parent">
          <div className="instructions-child">
            <h1>How to play:</h1>
            <p> Here's a Snakes and Ladders two player board game to play with your friends and family. </p>
            <br/>
            <p>1. Decide who goes first.</p>
            <p>2. Click on the button that says "Roll the dice".</p>
            <p>3. If you hit a snake you will go down, but if you hit a ladder you will go up.</p>
            <p>4. The first player that gets to 100 will win the game.</p>
          </div>
        </div>
      )
    }
  }


export default Instructions
