import React from 'react';

class LoginPage extends React.Component {
 state = {
   username: '',
   password: '',
 };

 handleChange = (event) => {
   this.setState({[event.target.name]: event.target.value});
 }

 handleSubmit = (event) => {
   event.preventDefault();
   this.props.handleSetUser(this.state)
 }

 render() {
   return(
     <form onSubmit={this.handleSubmit} autoComplete="on">
         <input type="text" value={this.state.value} name={"username"} placeholder={"Enter Username"} onChange={this.handleChange} autoComplete="on"/>
       <br />
         <input type="password" value={this.state.value} name={"password"} placeholder={"Enter Password"} onChange={this.handleChange} autoComplete="current-password"/>
       <br />
       <input type="submit" value="Submit" />
     </form>
   )
 }
}

export default LoginPage;
