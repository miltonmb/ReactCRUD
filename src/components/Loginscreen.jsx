import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from './Register';

class Loginscreen extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            loginscreen:[],
            buttonLabel: 'Register',
            isLogin: true
        }
    }
    componentWillMount(){
        var loginscreen=[]
        loginscreen.push(<Login parentContext={this} appContext={this.props.appContext}/>)
        this.setState({
            loginscreen:loginscreen,
        })
    }

    handleClick(event){
        if(this.state.isLogin){
            var loginscreen = []
            console.log(this.props)
            loginscreen.push(<Register parentContext={this}/>)
            this.setState({
                loginscreen: loginscreen,
                buttonLabel: "Login",
                isLogin: false
            })
        }else{
            var loginscreen = []
            loginscreen.push(<Login parentContext={this}/>)
            this.setState({
                loginscreen:loginscreen,
                buttonLabel:"Register",
                isLogin: true
            })
        }
    }

    render(){
        return(
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    <MuiThemeProvider>
                    <div>
                        <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event)=>this.handleClick(event)}/>
                    </div>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}
const style={
    margin: 15,
}
export default Loginscreen