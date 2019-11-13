import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'
import Modal from 'react-responsive-modal'
class ExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      price: '',
      category: '',
      categories: this.props.categories,
      open: false,
      CategoryName: ''
    }
  }
  componentWillMount() {
    var self = this;
    if (this.props.categories.length != 0) {
      self.setState({
        category: self.props.categories[0].id
      })
    }
    axios
      .get(
        'https://expense-manager-t.herokuapp.com/api/users/' +
        this.props.userid +
        '/categories'
      )
      .then(function (response) {
        console.log(response.data)
        self.setState({
          categories: response.data
        })
      })
  }

  handleClick(event) {
    var self = this
    var apiBaseUrl =
      'https://expense-manager-t.herokuapp.com/api/categories/' + this.state.category + '/'
    var payload = {
      content: this.state.content,
      price: this.state.price
    }
    axios
      .post(apiBaseUrl + 'items', payload, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      .then(function (response) {
        if (response.status === 201) {
          // console.log('item posted succesfull')
          window.location.reload();
        } else if (response.status === 400) {
          console.log('Item was not added')
          alert('Item not added')
        }
      })
  }
  handleModalClick(event) {
    var apiBaseUrl = 'https://expense-manager-t.herokuapp.com/api/users/' + this.props.userid + '/'
    var self = this
    var payload = {
      name: this.state.CategoryName
    }
    axios
      .post(apiBaseUrl + 'categories', payload, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      .then(function (response) {
        //console.log(response)
        if (response.status === 201) {
          //console.log('item posted succesfull')
          self.props.categories.push(response.data)
          console.log(self.props.categories)
          //self.onCloseModal()
          window.location.reload()
        } else if (response.status === 400) {
          console.log('Item was not added')
          alert('Item not added')
        }
      })
  }
  onOpenModal = () => {
    this.setState({
      open: true
    })
  }

  onCloseModal = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <InputLabel htmlFor='category-native-simple'>
              Category:
            </InputLabel>
            <select
              style={styleSelect}
              value={this.state.category}
              onChange={event => {
                this.setState({ category: event.target.value })
              }}
            >
              {this.state.categories.map(category => (
                <option value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <Button
              variant='fab'
              color='primary'
              aria-label='Add'
              style={styleButton}
              onClick={this.onOpenModal}
            >
              <AddIcon />
            </Button>
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
              <div>
                <TextField
                  hintText='Enter category name'
                  floatingLabelText='category'
                  onChange={(event, newValue) => {
                    this.setState({ CategoryName: newValue })
                  }}
                  margin='normal'
                />
                <br />
                <RaisedButton
                  label='Submit'
                  primary
                  style={style}
                  onClick={event => this.handleModalClick(event)}
                />
              </div>

            </Modal>
            <br />
            <TextField
              hintText='Enter item'
              floatingLabelText='Item'
              onChange={(event, newValue) => {
                this.setState({ content: newValue })
              }}
              margin='normal'
            />
            <br />
            <TextField
              hintText='Enter value'
              type='number'
              floatingLabelText='Value'
              onChange={(event, newValue) => {
                this.setState({ price: newValue })
              }}
              margin='normal'
            />
            <br />
            <RaisedButton
              label='Submit'
              primary
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
const style = {
  margin: 15
}
const styleSelect = {
  'margin-top': 20,
  'margin-left': 10
}
const styleButton = {
  'margin-left': 15,
  'margin-top': 10
}
export default ExpenseForm
