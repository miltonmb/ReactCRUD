import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import axios from 'axios'
import ExpenseForm from './ExpenseForm'
import ExpenseTable from './ExpenseTable'
import { Redirect } from 'react-router-dom'
import '../css/Expense.css'

class ExpenseScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userid: '',
      categories: [],
    }
  }

  render () {
    if (this.props.history.location.state == null) {
      return (
        <Redirect to='/' />
      )
    }else if (this.props.history.location.state != null) {
      if (this.props.history.location.state.isLogged == true) {
        this.state.categories = this.props.history.location.state.Categories
        this.state.userid = this.props.history.location.state.userId
        console.log(this.state.userid)
        return (
          <div className='ExpenseScreen'>
            <MuiThemeProvider>
              <div>
                <AppBar title='Expense Manager' showMenuIconButton={false} />
                <ExpenseForm categories={this.state.categories} userid={this.state.userid}/>
                <ExpenseTable userid={this.state.userid}/>
              </div>
            </MuiThemeProvider>
          </div>
        )
      }else {
        return (
          <Redirect to='/' />
        )
      }
    }
  }
}
export default ExpenseScreen
