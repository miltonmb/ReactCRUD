import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Modal from 'react-responsive-modal'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import '../css/Expense.css'


class ExpenseTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      open: false,
      ItemName: "",
      ItemPrice: "",
      CategoryId: "",
      ItemId: "",
    }
  }
  componentWillMount() {
    var self = this
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
  componentDidMount() {
    var self = this
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
    var tempDate = new Date();
    var date = tempDate.getDate()
    var total = 0
    if (date === '30' || date === '31' || date == '29' || date == '27') {
      this.state.categories.map(data => {
        if (data.items != null) {
          data.items.map(itemData => {
            console.log(itemData.price)
          })
        }
        console.log(data)
      })
      window.alert("Your total for this month is: " + total);
    }
  }

  handleClick(categoryId, itemId) {
    var self = this
    var apiBaseUrl =
      'https://expense-manager-t.herokuapp.com/api/categories/' + categoryId + '/items/' + itemId

    axios.delete(apiBaseUrl).then(window.location.reload())

  }

  handleModalClick(event) {
    var apiBaseUrl = 'https://expense-manager-t.herokuapp.com/api/categories/' + this.state.CategoryId + '/items/' + this.state.ItemId
    var self = this
    var payload = {
      content: this.state.ItemName,
      price: this.state.ItemPrice

    }
    axios
      .put(apiBaseUrl, payload, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      .then(function (response) {
        //console.log(response)
        if (response.status === 200) {
          //this.onCloseModal()
          window.location.reload()
        } else if (response.status === 400) {
          console.log('Item was not added')
          alert('Item not added')
        }
      })
  }

  onOpenModal(categoryId, itemId) {
    this.setState({
      open: true,
      CategoryId: categoryId,
      ItemId: itemId
    })
  }

  onCloseModal = () => {
    this.setState({
      open: false,
      CategoryId: "",
      ItemId: ""
    })
  }

  render() {
    /*return (
      <div className='table'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell numeric>Id</TableCell>
              <TableCell>Item</TableCell>
              <TableCell numeric>Price (L)</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.categories.map((data, key) => {
              if (data.items != null) {
                return data.items.map(itemData => {
                  return (
                    <TableRow key={data.id}>
                      <TableCell component='th' scope='row' numeric>
                        {itemData.id}
                      </TableCell>
                      <TableCell>{itemData.content}</TableCell>
                      <TableCell numeric>{itemData.price}</TableCell>
                      <TableCell>{data.name}</TableCell>
                    </TableRow>
                  )
                })
              }
            })}
          </TableBody>
        </Table>
      </div>
    )
  }*/
    //const classes = useStyles();
    return (
      <div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div>
            <TextField
              hintText='Enter Item name'
              floatingLabelText='item Name'
              onChange={(event, newValue) => {
                this.setState({ ItemName: newValue })
              }}
              margin='normal'
            />
            <br />
            <TextField
              hintText='Enter Item price'
              floatingLabelText='Item price'
              onChange={(event, newValue) => {
                this.setState({ ItemPrice: newValue })
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
        {this.state.categories.map((data, key) => {
          if (data.items != null) {
            return data.items.map(itemData => {
              return (
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {itemData.content}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Price: L.{itemData.price}
                      <br></br>
                      Category: {data.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={event => this.onOpenModal(data.id, itemData.id)}
                    >Edit</Button>
                    <Button
                      size="small"
                      onClick={event => this.handleClick(data.id, itemData.id)}
                    >Remove</Button>
                  </CardActions>
                </Card>
              )
            })
          }
        })}
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
export default ExpenseTable
