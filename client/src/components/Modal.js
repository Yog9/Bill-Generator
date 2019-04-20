import React from 'react'
import ModalItem from './ModalItem';
import { withRouter } from 'react-router-dom';

class Modal extends React.Component {

    redirectToTarget = () => {
        this.props.history.push(`/order`);
        console.log(`Clicked confirm`);
    }
    handleConfirm = () => {
        this.props.addPricing();
        this.redirectToTarget();
    }

    render() {

        console.log(this.props)
        const showHideClassName = this.props.show ?
            "modal display-block" : "modal display-none";

        const i = this.props.menu.map((item, index) => {
            return item.quantity > 0 ?
                (<ModalItem
                    quantity={item.quantity}
                    price={item.price}
                    dish={item.dish}
                    key={index}
                />) : null
        }
        )
        return (
            <main>

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
                            <button onClick={this.props.handleClose}>Close</button>
                            <button onClick={this.handleConfirm} > Confirm </button>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}
export default withRouter(Modal);
