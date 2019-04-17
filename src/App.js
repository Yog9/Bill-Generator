import React, { Component } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import Modal from './components/Modal';
class App extends Component {
  state = {
    menu: [
      { id: 1, quantity: 0, dish: "Gajar Halwa", price: 100 },
      { id: 2, quantity: 0, dish: "Lassi", price: 20 },
      { id: 3, quantity: 0, dish: "Samosa", price: 15 },
      { id: 4, quantity: 0, dish: "Masala Papad", price: 30 },
    ],
    show: false
  }
  handleInc = (index) => {
    this.setState({
      quantity: this.state.menu[index].quantity += 1
    })
    // console.log(`Inc state of ${index} ${this.state.menu[index].quantity}`)
  }

  handleDec = (index) => {
    if (this.state.menu[index].quantity > 0) {
      this.setState({
        quantity: this.state.menu[index].quantity += - 1
      })
    }
    //console.log(`dec state of ${index} ${this.state.menu[index].quantity}`)
  }


  showModal = () => {
    this.setState({ show: true })
    //console.log(`Clicked show modal state is ${this.state.show}`)
  };

  hideModal = () => {
    this.setState({ show: false })
    // console.log(`Clicked hide modal state is ${this.state.show}`)
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Form handleInc={this.handleInc}
          handleDec={this.handleDec}
          menu={this.state.menu}
        />


        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          menu={this.state.menu}
        />
        <button id="" onClick={this.showModal}>CHECKOUT</button>
      </div>
    )
  }
}

export default App;
