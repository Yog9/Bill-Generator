import React, { Component } from 'react'

export default class MenuItem extends Component {

  render() {
    return (
      <React.Fragment>
        <div class="item">
          <div className="dish_details">
            <span class="dish-name"> {this.props.dish}</span>
            <p className="price">₹ {this.props.price}</p>
          </div>
          <div class="counter">
            <button class="counter-action decrement" onClick={() => this.props.handleDec(this.props.index)}> - </button>
            <span class="quantity">{this.props.quantity}</span>
            <button class="counter-action increment" onClick={() => this.props.handleInc(this.props.index)}> + </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}