import React, { Component } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import Modal from './components/Modal';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { id: 1, quantity: 0, dish: "Gajar Halwa", price: 100 },
        { id: 2, quantity: 0, dish: "Lassi", price: 20 },
        { id: 3, quantity: 0, dish: "Samosa", price: 15 },
        { id: 4, quantity: 0, dish: "Masala Papad", price: 30 },
      ],
      show: false,
      bill: {},
    }
  }
  handleInc = (index) => {
    const {menu, bill} = this.state;
    const menu_item = menu[index];
    const id = menu_item.id
    if (bill[id] === undefined) {
      bill[id] = {...menu_item};
    }
    bill[id].quantity += 1;
    menu[index].quantity += 1;
    this.setState({
      menu,
      bill,
    })
    // console.log(`Inc state of ${index} ${this.state.menu[index].quantity}`)
  }

  handleDec = (index) => {
    const {menu} = this.state;
    let {bill} = this.state
    const id = menu[index].id
    if (bill[id]) {
      if (bill[id].quantity > 1) {
        bill[id].quantity -= 1;
        menu[index].quantity -= 1;
      } else if (bill[id].quantity === 1) {
        delete bill[id];
        bill = {}
        menu[index].quantity -= 1;
      }
      this.setState({
          menu,
          bill,
      })
    }

    // if (this.state.menu[index].quantity > 0) {
    //
    // }
    //console.log(`dec state of ${index} ${this.state.menu[index].quantity}`)
  }


  showModal = () => {
    this.setState({ show: true })
    //console.log(`Clicked show modal state is ${this.state.show}`)
  };

  hideModal = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Form handleInc={this.handleInc}
          handleDec={this.handleDec}
          menu={this.state.menu}
        />
      {
        this.state.show ? (
          <Modal
            show={this.state.show}
            handleClose={this.hideModal}
            bill={this.state.bill}
          />
      ) : null
      }
        <button id="" onClick={this.showModal}>CHECKOUT</button>
      </div>
    )
  }
}

export default App;
