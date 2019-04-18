import React from 'react'
import ModalItem from './ModalItem';
import { withRouter } from 'react-router-dom';

class Modal extends React.Component {
    redirectToTarget = () => {
        this.props.history.push(`/order`);
        console.log(`Clicked confirm`);
    }
    render() {
        const showHideClassName = this.props.show ?
            "modal display-block" : "modal display-none";

        const i = this.props.menu.map((item, index) =>

            <ModalItem
                quantity={item.quantity}
                price={item.price}
                dish={item.dish}
                key={index}
                handleClose={this.props.handleClose}
            />
        )
        return (
            <div>
                <div className={showHideClassName}>
                    <section className="modal-main">
                        <h1>Your Order</h1>
                        <div className="modal-container">
                            <div className="modal-item">
                                <div>Dish Name</div>
                            </div>
                            <div className="modal-item">
                                <div>Quantity</div>
                            </div>
                            <div className="modal-item">
                                <div>Price ₹ </div>
                            </div>
                            <div className="modal-item">
                                <div>Total cost ₹ </div>
                            </div>
                            {i}
                            <button onClick={this.props.handleClose} >Close</button>
                            <button onClick={this.redirectToTarget} > Confirm </button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default withRouter(Modal);

