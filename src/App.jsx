import React, { createContect, Component } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import NavBar from './NavBar';
import Shopping from './Shopping';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Cart: 0,
      Price: 0,
    };

    this.handleCart = this.handleCart.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
  }

  handleCart(newCartValue) {
    this.setState({ Cart: newCartValue });
  }

  handlePrice(newPriceValue) {
    this.setState({ Price: newPriceValue });
  }

  render() {
    return (
      <>
        <NavBar Cart={this.state.Cart} Price={this.state.Price} />
        <Outlet />
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
