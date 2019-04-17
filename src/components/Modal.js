import React from 'react'
import ModalItem from './ModalItem';
function Modal(props) {
    console.log(props)
    const showHideClassName = props.show ?
        "modal display-block" : "modal display-none";
    const redirectToTarget = () => {
        props.history.push(`/order`);
        console.log(`Clicked confirm`);
    }
    const i = props.menu.map((item, index) =>

        <ModalItem
            quantity={item.quantity}
            price={item.price}
            dish={item.dish}
            key={index}
            handleClose={props.handleClose}
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
                        <button onClick={props.handleClose} >Close</button>
                        <button onClick={redirectToTarget} > Confirm </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Modal;

