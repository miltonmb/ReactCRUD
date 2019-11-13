import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios';

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLogged: false
    }
  }

  handleClick(event){
      var apiBaseUrl = "https://expense-manager-t.herokuapp.com/api/";
      var self = this;
      var payload = {
          "email":this.state.email,
          "password":this.state.password
      }
      axios.post(apiBaseUrl+'login', payload, { headers: { "Access-Control-Allow-Origin": "*", }})
      .then(function (response){
          console.log(response)
          if(response.status === 200){
              console.log("login successfull")
              //console.log(self.props.appContext)
              var categories = response.data.categories;
              console.log(categories)
              var id = response.data.id;
              self.setState({isLoggged: true})
              self.props.appContext.props.history.push({
                  pathname: '/expense',
                  state: 
                  {isLogged: true,
                    Categories: categories,
                    userId: id,
                }
              })
          }else if(response.status === 400){
              console.log("Email and password dont match")
              alert("Email or password dont match")
          }
      })
      .catch(function(err){
          console.log(err)
      })
  }

  render () {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title='Login' showMenuIconButton={false} />
            <TextField 
                hintText="Enter your email" 
                floatingLabelText="Email"
                onChange={(event, newValue)=>{
                    this.setState({email:newValue})
            }}/>
            <br/>
            <TextField 
                type ="password"
                hintText="Enter your password"
                floatingLabelText="Password"
                onChange={(event, newValue)=>{
                    this.setState({password:newValue})
                }}/>
            <br/>
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event)=> this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
const style = {
    margin: 15,
}

export default Login
