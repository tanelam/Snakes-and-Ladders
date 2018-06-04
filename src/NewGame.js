import React, {Component} from "react"
import "./css/buttons.css"

const NewGame = ( props ) => {
  return(
    <div>
      <button  className="button new-game" type="button" onClick={props.newGame} > New Game </button>
    </div>
  )
}


export default NewGame;
