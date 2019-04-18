import React, { Component } from 'react'

export default class MenuItem extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="item">
          <div className="dish_details">
            <span className="dish-name"> {this.props.dish}</span>
            <p className="price">₹ {this.props.price}</p>
          </div>
          <div className="counter">
            <button className="counter-action decrement" onClick={() => this.props.handleDec(this.props.index)}> - </button>
            <span className="quantity">{this.props.quantity}</span>
            <button className="counter-action increment" onClick={() => this.props.handleInc(this.props.index)}> + </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}