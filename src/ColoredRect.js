import React, { Component } from "react"
import "./snakes.css"
import Player1 from "./Player1"
import Player2 from "./Player2"
import Dice from "./Dice"
import ReactDOM from 'react-dom';
import position from "./Position"

class ColoredRect extends Component {

state = {
  player1Pos:0,
  player2Pos:0,
  currentPlayer: "player1",
  positionObj: position,
  diceValue: null,
  flag: false
}



ChangeDiceValue = () =>{

   let rand = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

    let pos = 0
   if(this.state.currentPlayer === "player1"){

     let val = this.state.player1Pos + rand;
     if(val >100){

       this.setState({
         flag: true
       })
     }else{pos = this.state.positionObj[val]
     this.setState({
       diceValue: rand,
       currentPlayer: "player2",
       player1Pos: pos
     })}

   }else if (this.state.currentPlayer === "player2") {
     let val = this.state.player2Pos + rand;
     if(val >100){

       this.setState({
         flag: true
       })
     }else{pos = this.state.positionObj[val]
     this.setState({
       diceValue: rand,
       currentPlayer: "player1",
       player2Pos: pos
     })}

   }

}






setPlayersPos=(num)=>{
 if(this.state.player1Pos== num && this.state.player2Pos == num) return (<div><Player1/> <Player2/></div>)
 if(this.state.player1Pos== num) return (<Player1/>)
 if(this.state.player2Pos== num) return (<Player2/>)
 return null
}



render(){


return (

      <div>
      <div className="board-image"></div>
      <div  className="board-wrap">
        <div  className="board" id="100">100{this.setPlayersPos(100)}</div>
        <div className="board" id="99">99</div>
        <div className="board" id="98">98{this.setPlayersPos(98)}</div>
        <div className="board" id="97">97{this.setPlayersPos(97)}</div>
        <div className="board"id="96">96{this.setPlayersPos(96)}</div>
        <div className="board" id="95">95{this.setPlayersPos(95)}</div>
        <div className="board" id="94">94{this.setPlayersPos(94)}</div>
        <div className="board" id="93">93{this.setPlayersPos(93)}</div>
        <div className="board" id="92">92</div>
        <div className="board" id="91">91{this.setPlayersPos(91)}</div>
        <div className="board" id="81">81{this.setPlayersPos(81)}</div>
        <div className="board" id="82">82{this.setPlayersPos(82)}</div>
        <div className="board" id="83">83{this.setPlayersPos(83)}</div>
        <div className="board" id="84">84{this.setPlayersPos(84)}</div>
        <div className="board" id="85">85{this.setPlayersPos(85)}</div>
        <div className="board" id="86">86{this.setPlayersPos(86)}</div>
        <div className="board" id="87">87{this.setPlayersPos(87)}</div>
        <div className="board" id="88">88</div>
        <div className="board" id="89">89{this.setPlayersPos(89)}</div>
        <div className="board" id="90">90{this.setPlayersPos(90)}</div>
        <div className="board" id="80">80</div>
        <div className="board" id="79">79{this.setPlayersPos(79)}</div>
        <div className="board" id="78">78{this.setPlayersPos(78)}</div>
        <div className="board" id="77">77{this.setPlayersPos(77)}</div>
        <div className="board" id="76">76{this.setPlayersPos(76)}</div>
        <div className="board" id="75">75{this.setPlayersPos(75)}</div>
        <div className="board" id="74">74{this.setPlayersPos(74)}</div>
        <div className="board" id="73">73{this.setPlayersPos(73)}</div>
        <div className="board" id="72">72</div>
        <div className="board" id="71">71{this.setPlayersPos(71)}</div>
        <div className="board" id="61">61{this.setPlayersPos(61)}</div>
        <div className="board" id="62">62{this.setPlayersPos(62)}</div>
        <div className="board" id="63">63{this.setPlayersPos(63)}</div>
        <div className="board" id="64">64{this.setPlayersPos(64)}</div>
        <div className="board" id="65">65</div>
        <div className="board" id="66">66{this.setPlayersPos(66)}</div>
        <div className="board" id="67">67{this.setPlayersPos(67)}</div>
        <div className="board" id="68">68{this.setPlayersPos(68)}</div>
        <div className="board" id="69">69{this.setPlayersPos(69)}</div>
        <div className="board" id="70">70{this.setPlayersPos(70)}</div>
        <div className="board" id="60">60{this.setPlayersPos(60)}</div>
        <div className="board" id="59">59{this.setPlayersPos(59)}</div>
        <div className="board" id="58">58{this.setPlayersPos(58)}</div>
        <div className="board" id="57">57{this.setPlayersPos(57)}</div>
        <div className="board" id="56">56</div>
        <div className="board" id="55">55{this.setPlayersPos(55)}</div>
        <div className="board" id="54">54{this.setPlayersPos(54)}</div>
        <div className="board" id="53">53{this.setPlayersPos(53)}</div>
        <div className="board" id="52">52{this.setPlayersPos(52)}</div>
        <div className="board" id="51">51</div>
        <div className="board" id="41">41{this.setPlayersPos(41)}</div>
        <div className="board" id="42">42{this.setPlayersPos(42)}</div>
        <div className="board" id="43">43</div>
        <div className="board" id="44">44{this.setPlayersPos(44)}</div>
        <div className="board" id="45">45{this.setPlayersPos(45)}</div>
        <div className="board" id="46">46{this.setPlayersPos(46)}</div>
        <div className="board" id="47">47{this.setPlayersPos(47)}</div>
        <div className="board" id="48">48{this.setPlayersPos(48)}</div>
        <div className="board" id="49">49</div>
        <div className="board" id="50">50{this.setPlayersPos(50)}</div>
        <div className="board" id="40">40{this.setPlayersPos(40)}</div>
        <div className="board" id="39">39{this.setPlayersPos(39)}</div>
        <div className="board" id="38">38{this.setPlayersPos(38)}</div>
        <div className="board" id="37">37{this.setPlayersPos(37)}</div>
        <div className="board" id="36">36{this.setPlayersPos(36)}</div>
        <div className="board" id="35">35{this.setPlayersPos(35)}</div>
        <div className="board" id="34">34{this.setPlayersPos(34)}</div>
        <div className="board" id="33">33{this.setPlayersPos(33)}</div>
        <div className="board" id="32">32{this.setPlayersPos(32)}</div>
        <div className="board" id="31">31{this.setPlayersPos(31)}</div>
        <div className="board" id="21">21</div>
        <div className="board" id="22">22{this.setPlayersPos(22)}</div>
        <div className="board" id="23">23{this.setPlayersPos(23)}</div>
        <div className="board" id="24">24{this.setPlayersPos(24)}</div>
        <div className="board" id="25">25{this.setPlayersPos(25)}</div>
        <div className="board" id="26">26{this.setPlayersPos(26)}</div>
        <div className="board" id="27">27{this.setPlayersPos(27)}</div>
        <div className="board" id="28">28</div>
        <div className="board" id="29">29{this.setPlayersPos(29)}</div>
        <div className="board" id="30">30{this.setPlayersPos(30)}</div>
        <div className="board" id="20">20{this.setPlayersPos(20)}</div>
        <div className="board" id="19">19</div>
        <div className="board" id="18">18</div>
        <div className="board" id="17">17{this.setPlayersPos(17)}</div>
        <div className="board" id="16">16{this.setPlayersPos(16)}</div>
        <div className="board" id="15">15{this.setPlayersPos(15)}</div>
        <div className="board" id="14">14{this.setPlayersPos(14)}</div>
        <div className="board" id="13">13{this.setPlayersPos(13)}</div>
        <div className="board" id="12">12{this.setPlayersPos(12)}</div>
        <div className="board" id="11">11{this.setPlayersPos(11)}</div>
        <div className="board" id="1">1{this.setPlayersPos(1)}</div>
        <div className="board" id="2">2{this.setPlayersPos(2)}</div>
        <div className="board" id="3">3{this.setPlayersPos(3)}</div>
        <div className="board" id="4">4{this.setPlayersPos(4)}</div>
        <div className="board" id="5">5{this.setPlayersPos(5)}</div>
        <div className="board" id="6">6</div>
        <div className="board" id="7">7{this.setPlayersPos(7)}</div>
        <div className="board" id="8">8{this.setPlayersPos(8)}</div>
        <div className="board" id="9">9</div>
        <div className="board" id="10">10{this.setPlayersPos(10)}</div>


      </div>
      < Dice diceValue={this.ChangeDiceValue}/>

      </div>
)
}

}



export default ColoredRect
