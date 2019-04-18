import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Form from './components/Form';
import Modal from './components/Modal';
import Order from './components/Order';

class App extends Component {
  state = {
    menu: [
      { id: 1, quantity: 0, dish: "Gajar Halwa", price: 100 },
      { id: 2, quantity: 0, dish: "Lassi", price: 20 },
      { id: 3, quantity: 0, dish: "Samosa", price: 15 },
      { id: 4, quantity: 0, dish: "Masala Papad", price: 30 },
    ],
    show: false,
    bill: []
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
    const disableButton = this.state.bill.length > 0 ? false : true;
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
                    />
                    <Modal
                      show={this.state.show}
                      handleClose={this.hideModal}
                      menu={this.state.bill}
                    />
                    <button onClick={this.showModal} disabled={disableButton}>CHECKOUT</button>
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
