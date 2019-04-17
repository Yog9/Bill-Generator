import React, { Component } from 'react'
import MenuItem from './MenuItem';

export default class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const item = this.props.menu.map((i, index) =>
            <MenuItem key={index}
                dish={i.dish}
                quantity={i.quantity}
                price={i.price}
                index={index}
                handleInc={this.props.handleInc}
                handleDec={this.props.handleDec} />

        )

        return (<React.Fragment>
            <div className="container mt-2">
                <form action="" method="get" onSubmit={this.handleSubmit}>

                    {item}


                </form>

            </div>
        </React.Fragment>

        )
    }
}
