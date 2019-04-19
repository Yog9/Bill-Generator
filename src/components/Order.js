import React from 'react'

export default class Order extends React.Component {
    render() {
        let total_cost = 0;
        this.props.menu.map((item) => total_cost = total_cost + (item.price * item.quantity))
        return (
            <div>
                <h1>Order</h1>
                <div className="order-wrapper">
                    <div className="order">
                        {
                            this.props.menu.map((item, index) =>
                                <React.Fragment key={index}>
                                    <div className="order-item">
                                        {item.dish}
                                    </div>
                                    <div className="order-item">
                                        x {item.quantity}
                                    </div>
                                    <div className="order-item">
                                        ₹ {item.price}
                                    </div>
                                </React.Fragment>
                            )
                        }
                    </div>
                    <div className="total_cost"> Total Cost :  ₹  {total_cost} </div>
                </div>
            </div>
        )
    }
}