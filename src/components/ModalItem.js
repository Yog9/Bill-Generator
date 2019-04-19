import React from 'react'

export default function ModalItem(props) {
    const cost = props.quantity * props.price;
    return (
        <React.Fragment>
            <div className="modal-item">
                <div>{props.dish}</div>
            </div>
            <div className="modal-item">
                <div>{props.quantity}</div>
            </div>
            <div className="modal-item">
                <div> {props.price}</div>
            </div>
            <div className="modal-item">
                <div> ₹ {cost}</div>
            </div>
        </React.Fragment>

    )
}