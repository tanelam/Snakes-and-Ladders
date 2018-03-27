import React, {Component} from "react";
import "./snakes.css"

const Dice = ( props ) =>{


  return(
    <div className="button-div" >
        <button  className="button" type="button" onClick={props.diceValue} >Roll the Dice</button>
    </div>
  )
}


export default Dice;
