import React, { Component } from "react"
import "./snakes.css"







class ColoredRect extends Component {


  onClickHandle=(e)=>{
    console.log(e.target.innerText)
  }

render(){

return (
      <div>
      <div className="board-image"></div>
      <div onClick={this.onClickHandle} className="board-wrap">
        <div className="board">100</div>
        <div className="board">99</div>

        <div className="board" >98</div>
        <div className="board">97</div>
        <div className="board">96</div>
        <div className="board">95</div>
        <div className="board">94</div>
        <div className="board">93</div>
        <div className="board">92</div>
        <div className="board">91</div>
        <div className="board">81</div>
        <div className="board">82</div>
        <div className="board">83</div>
        <div className="board">84</div>
        <div className="board">85</div>
        <div className="board">86</div>
        <div className="board">87</div>
        <div className="board">88</div>
        <div className="board">89</div>
        <div className="board">90</div>
        <div className="board">80</div>
        <div className="board">79</div>
        <div className="board">78</div>
        <div className="board">77</div>
        <div className="board">76</div>
        <div className="board">75</div>
        <div className="board">74</div>
        <div className="board">73</div>
        <div className="board">72</div>
        <div className="board">71</div>
        <div className="board">61</div>
        <div className="board">62</div>
        <div className="board">63</div>
        <div className="board">64</div>
        <div className="board">65</div>
        <div className="board">66</div>
        <div className="board">67</div>
        <div className="board">68</div>
        <div className="board">69</div>
        <div className="board">70</div>
        <div className="board">60</div>
        <div className="board">59</div>
        <div className="board">58</div>
        <div className="board">57</div>
        <div className="board">56</div>
        <div className="board">55</div>
        <div className="board">54</div>
        <div className="board">53</div>
        <div className="board">52</div>
        <div className="board">51</div>
        <div className="board">41</div>
        <div className="board">42</div>
        <div className="board">43</div>
        <div className="board">44</div>
        <div className="board">45</div>
        <div className="board">46</div>
        <div className="board">47</div>
        <div className="board">48</div>
        <div className="board">49</div>
        <div className="board">50</div>
        <div className="board">40</div>
        <div className="board">39</div>
        <div className="board">38</div>
        <div className="board">37</div>
        <div className="board">36</div>
        <div className="board">35</div>
        <div className="board">34</div>
        <div className="board">33</div>
        <div className="board">32</div>
        <div className="board">31</div>
        <div className="board">21</div>
        <div className="board">22</div>
        <div className="board">23</div>
        <div className="board">24</div>
        <div className="board">25</div>
        <div className="board">26</div>
        <div className="board">27</div>
        <div className="board">28</div>
        <div className="board">29</div>
        <div className="board">30</div>
        <div className="board">20</div>
        <div className="board">19</div>
        <div className="board">18</div>
        <div className="board">17</div>
        <div className="board">16</div>
        <div className="board">15</div>
        <div className="board">14</div>
        <div className="board">13</div>
        <div className="board">12</div>
        <div className="board">11</div>
        <div className="board">1</div>
        <div className="board">2</div>
        <div className="board">3</div>
        <div className="board">4</div>
        <div className="board">5</div>
        <div className="board">6</div>
        <div className="board">7</div>
        <div className="board">8</div>
        <div className="board">9</div>
        <div className="board">10</div>


      </div>
      </div>
)
}

}



export default ColoredRect
