import React, { createContect, Component } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import NavBar from './NavBar';
import Shopping from './Shopping';

class App extends Component {
  constructor(props) {
    super(props);

    //Initialize state for amount of items in cart and total cart price, respectively
    this.state = {
      Cart: 0,
      Price: 0,
    };

    this.handleCart = this.handleCart.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
  }

  //Update cart state
  handleCart(newCartValue) {
    this.setState({ Cart: newCartValue });
  }

  //Update price state
  handlePrice(newPriceValue) {
    this.setState({ Price: newPriceValue });
  }
  
  render() {
    return (
      <>
        {/* Nav Bar on top of each page */}
        <NavBar Cart={this.state.Cart} Price={this.state.Price} />
         

        {/* Render the Shopping Component and pass state and update functions as props */}
        <div className="main-content">
          <Shopping
            Cart={this.state.Cart} 
            updateCart={this.handleCart}
            Price={this.state.Price} 
            updatePrice={this.handlePrice}
          />
        </div>
      </>
    );
  }
}

export default App;
