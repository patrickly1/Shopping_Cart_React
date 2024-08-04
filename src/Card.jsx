import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleIncreaseChange = this.handleIncreaseChange.bind(this);
        this.handleDecreaseChange = this.handleDecreaseChange.bind(this);
    };

    handleSubmitChange(e) {
        e.preventDefault();
        const value = parseInt(e.target.elements.cartValue.value, 10);
        if (!isNaN(value)) {
            this.props.updateCart(this.props.Cart + value);
        }
    };

    handleIncreaseChange() {
        this.props.updateCart(this.props.Cart + 1)
    };

    handleDecreaseChange() {
        if (this.props.Cart > 0) {
            this.props.updateCart(this.props.Cart - 1);
        }
    };

    render() {
        const { title, image } = this.props;

        return (
            <>
                <div>
                    <img src={image} alt={title} style={{ width: '100px', height: '100px' }} />
                </div>
                <div>
                    {title}
                </div>
                <form onSubmit={this.handleSubmitChange}>
                    <input type="number" name="cartValue" />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={this.handleIncreaseChange}>+</button>
                <button onClick={this.handleDecreaseChange}>-</button>
            </>
        )
    }
}

export default Card