import React from 'react'
import ModalItem from './ModalItem';
class Modal extends React.Component {
    render() {
        const {bill} = this.props;
        const showHideClassName = this.props.show ?
            "modal display-block" : "modal display-none";
        const bill_items = Object.values(bill)
        const i = bill_items.map((item, index) => {
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
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}
export default Modal;
