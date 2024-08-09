import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Cart: 0,
    };

    this.handleCart = this.handleCart.bind(this);
  }

  handleCart(newCartValue) {
    this.setState({ Cart: newCartValue });
  }

  render() {
    return (
      <>
        <NavBar Cart={this.state.Cart} />
        <div className="main-content">
          <Outlet context={{ Cart: this.state.Cart, updateCart: this.handleCart }} />
        </div>
      </>
    );
  }
}

export default App;
