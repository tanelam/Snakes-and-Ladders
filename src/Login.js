import React, {Component} from 'react'
import LoginPage from './LoginPage'

class LoginContainer extends Component {
 state = {
   users: [],
   userExists: true,
   loginUser: '',
 }

 componentDidMount() {
   fetch('http://localhost:3000/users')
   .then(res => res.json())
   .then(users => this.setState({ users }) )
 }

 handleSubmit = (user) => {
   //does user already exist?
   const foundUser = this.state.users.find(u => u.username.toLowerCase() === user.username.toLowerCase())
   if (foundUser) {
     this.props.handleSubmit(foundUser)
   } else {
     this.setState({userExists: false, loginUser: user})
   }
 }




 // get the design for login form
 render() {
   return (
     <div className='login-container'>
       <div className="login-form">
         <h1>LOG IN</h1>
         <LoginPage handleSubmit={this.handleSubmit}/>
         
       </div>
     </div>
   )
 }
}

export default LoginContainer
