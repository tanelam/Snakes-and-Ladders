import React, {Component} from "react";
import "./snakes.css"

const Dice = ( props ) =>{


  return(
    <div>
    <div>
    <button  className="button"type="button" onClick={props.diceValue} ><h1>Clickmew</h1></button>
    </div>
    </div>
  )
}


export default Dice;
