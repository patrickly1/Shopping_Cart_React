import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitChange = this.handleSubmitChange.bind(this);
    this.handleIncreaseChange = this.handleIncreaseChange.bind(this);
    this.handleDecreaseChange = this.handleDecreaseChange.bind(this);
  }

  handleSubmitChange(e) {
    e.preventDefault();
    const value = parseInt(e.target.elements.cartValue.value, 10);
    const { price } = this.props
    if (!isNaN(value) && value > 0) {
      this.props.updateCart(this.props.Cart + value);
      this.props.updatePrice(this.props.Price + (value * price));
    }
  }

  handleIncreaseChange() {
    const { price } = this.props
    this.props.updateCart(this.props.Cart + 1);
    this.props.updatePrice(this.props.Price + price);
  }

  handleDecreaseChange() {
    const { price } = this.props
    if (this.props.Cart > 0) {
      this.props.updateCart(this.props.Cart - 1);
      this.props.updatePrice(this.props.Price - price);
    }
  }

  render() {
    const { title, image, price } = this.props;

    return (
      <div className="card-item">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h5>${price}</h5>
        <form onSubmit={this.handleSubmitChange}>
          <input type="number" name="cartValue" min="0" />
          <div className="card-bottom">
            <button type="submit">Submit</button>
            <button onClick={this.handleIncreaseChange}>+</button>
            <button onClick={this.handleDecreaseChange}>-</button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default Card;
