import React, {Component} from "react"

import "./snakes.css"

const NewGame = ( props ) =>{

  return(
    <div className="new-game" >
        <button  className="button-new-game" type="button" onClick={props.newGame} > New Game </button>
    </div>
  )
}


export default NewGame;
