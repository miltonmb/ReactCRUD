import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios'
import Login from './Login';

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleClick(event){
      var apiBaseUrl = "https://expense-manager-t.herokuapp.com/api/"
      var self = this
      console.log("Values", this.state.email, this.state.password)
      var payload={
          "email": this.state.email,
          "password": this.state.password
      }
      axios.post(apiBaseUrl+"users", payload, { headers: { "Access-Control-Allow-Origin": "*", }})
      .then(function(res){
          if(res.status === 201){
              console.log("Registration sucessfull")
              var loginscreen = []
              window.location.reload()
              loginscreen.push(<Login parentContext={this}/>)
              self.props.parentContext.setState({
                  loginscreen:loginscreen, buttonLabel:"Register", isLogin:true
              })
          }
      })
  }

  render () {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title='Register' showMenuIconButton={false} />
            <TextField
              hintText='Enter your Email'
              type='email'
              floatingLabelText='Email'
              onChange={(event, newValue) =>{
                
                this.setState({email: newValue})}} />
              <br/>
              <TextField
              hintText='Enter your Password'
              type='password'
              floatingLabelText='Password'
              onChange={(event, newValue) => this.setState({password: newValue})} />
              <br/>
              <RaisedButton label="Submit" primary={true} style={style} onClick={(event)=> this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
const style ={
    margin: 15,
}
export default Register;