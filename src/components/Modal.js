import React from 'react'
import ModalItem from './ModalItem';
const Modal = (props) => {
    console.log(props.menu)
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    /*const i = props.menu.map((item) =>
        <ModalItem
            quantity={item.quantity}
            price={item.price}
            dish={item.dish}
        />

    )*/
    return (
        <main>

            <div className={showHideClassName}>
                <section className="modal-main">
                    <div className="center">
                        <h1>Your Order</h1>


                    </div>

                </section>
            </div>
        </main>
    );
};
export default Modal;