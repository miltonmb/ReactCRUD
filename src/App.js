import React, { Component } from 'react';
import Loginscreen from './components/Loginscreen'
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loginPage:[],
    }
  }
  componentWillMount(){
    var loginPage=[]
    loginPage.push(<Loginscreen appContext={this}/>)
    this.setState({
      loginPage:loginPage
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    )
  }
}

export default App;
