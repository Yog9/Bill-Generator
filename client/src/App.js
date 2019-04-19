import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import Form from './components/Form';
import Modal from './components/Modal';
import Order from './components/Order';

class App extends Component {
  state = {
    menu: [],
    show: false,
    bill: [],

  }
  componentDidMount() {
    this.getMenu();
  }

  getMenu = () => {
    axios.get('http://localhost:5000/')
      .then(res => {
        console.log(res.data)
        if (res.data) {
          this.setState({
            menu: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  addPricing = () => {
    axios.post('http://localhost:5000/')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))

  }
  handleInc = (index) => {

    this.state.bill[index] = { ... this.state.menu[index] }
    this.state.bill[index].quantity += 1;
    this.state.menu[index].quantity += 1;
    this.setState({
      bill: this.state.bill,
      menu: this.state.menu
    })
    console.log(this.state.bill);
  }

  handleDec = (index) => {
    if (this.state.bill[index]) {
      if (this.state.bill[index].quantity > 1) {
        this.state.bill[index].quantity -= 1;
        this.state.menu[index].quantity -= 1;
        //console.log(this.state.bill);
      }
      else if (this.state.bill[index].quantity == 1) {
        delete this.state.bill[index];
        this.state.menu[index].quantity -= 1;
      }
      this.setState({
        menu: this.state.menu,
        bill: this.state.bill
      })
      console.log(this.state.bill);
    }
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render() {

    //const menu_filter = this.state.menu.filter(item => item.quantity > 0)
    //const disableButton = this.state.bill.length > 0 ? false : true;
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />

            <Switch>
              <Route exact path="/" render=
                {() =>
                  <React.Fragment>
                    <Form handleInc={this.handleInc}
                      handleDec={this.handleDec}
                      menu={this.state.menu}
                      bill
                    />
                    <Modal
                      show={this.state.show}
                      handleClose={this.hideModal}
                      menu={this.state.bill}
                    />
                    <button onClick={this.showModal}>CHECKOUT</button>
                  </React.Fragment>
                } />
              <Route path="/order" render={() => <Order menu={this.state.bill} />} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
