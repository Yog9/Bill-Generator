import React from 'react'

export default function ModalItem(props) {
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
                <div> ₹ {props.quantity * props.price}</div>
            </div>
        </React.Fragment>
    )
}
