import React, {Component} from "react"
import  "./pictures/one.png"
import  "./pictures/two.png"
import  "./pictures/three.png"
import  "./pictures/four.png"
import  "./pictures/five.png"
import  "./pictures/six.png"


class ShowDice extends Component {

  render(){
    const checkValue=()=>{
      let num = this.props.diceValue
      if(num == 1) return(<img src={require('./pictures/one.png')} alt=""></img> )
      if(num == 2) return(<img src={require('./pictures/two.png')} alt=""></img> )
      if(num == 3) return(<img src={require('./pictures/three.png')} alt=""></img>)
      if(num == 4) return(<img src={require('./pictures/four.png')} alt=""></img> )
      if(num == 5) return(<img src={require('./pictures/five.png')} alt=""></img> )
      return (<img src={require('./pictures/six.png')} alt=""></img>)
    }



    return(

    <div className="dice">
      {checkValue()}
    </div>
    )
  }
}

export default ShowDice
