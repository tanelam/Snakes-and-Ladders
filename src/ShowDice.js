import React, {Component} from "react"
import "./css/dice.css"
import  "./images/dice_images/one.png"
import  "./images/dice_images/two.png"
import  "./images/dice_images/three.png"
import  "./images/dice_images/four.png"
import  "./images/dice_images/five.png"
import  "./images/dice_images/six.png"


class ShowDice extends Component {

  render(){
    const checkValue=()=>{
      let num = this.props.diceValue
      if(num == 1) return(<img src={require('./images/dice_images/one.png')} alt=""></img> )
      if(num == 2) return(<img src={require('./images/dice_images/two.png')} alt=""></img> )
      if(num == 3) return(<img src={require('./images/dice_images/three.png')} alt=""></img>)
      if(num == 4) return(<img src={require('./images/dice_images/four.png')} alt=""></img> )
      if(num == 5) return(<img src={require('./images/dice_images/five.png')} alt=""></img> )
      return (<img src={require('./images/dice_images/six.png')} alt=""></img>)
    }

    return(
      <div className="dice">
        {checkValue()}
      </div>
    )
  }
}

export default ShowDice
