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
    //Initalize price of item from props
    const { price } = this.props
    //Only allow inputs greater than 0, do not want to add negative items to cart
    if (!isNaN(value) && value > 0) {
      //Add amount of items user has inputted to Cart
      this.props.updateCart(this.props.Cart + value);
      //Add amount of items user has inputted multiplied by the item's price to Price
      this.props.updatePrice(this.props.Price + (value * price));
    }
  }

  //Similar function for + button
  handleIncreaseChange() {
    const { price } = this.props
    this.props.updateCart(this.props.Cart + 1);
    this.props.updatePrice(this.props.Price + price);
  }

  //Similar function for - button
  //User is only allowed to remove from cart if the new price and amount of items in cart
  //is not negative. 
  handleDecreaseChange() {
    const { price } = this.props
    if (this.props.Cart > 0 && this.props.Price - price >= 0) {
      this.props.updateCart(this.props.Cart - 1);
      this.props.updatePrice(this.props.Price - price);
    }
  }

  //Get title, image, and price from props to render card
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
