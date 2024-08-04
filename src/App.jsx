import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import NavBar from './NavBar';
import Card from './Card';
import Shopping from './Shopping';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Cart: 0,
    };

    this.handleCart = this.handleCart.bind(this);
  }

  handleCart(newCartValue) {
    this.setState({Cart: newCartValue });
  }
  render () {
    return (
      <>
        <NavBar Cart={this.state.Cart} />
        <h1>Hello this is the first page</h1>
        <Card Cart={this.state.Cart} updateCart={this.handleCart} />
        <div>
          <Link to="Shopping/DefaultPage">Default Shopping Page</Link>
        </div>
        <div>
          <Link to="Shopping/Page2">Page 2 Shopping Page</Link>
        </div>
        <div>
          <Link to="Shopping/Page1">Page 1 Shopping Page</Link>
        </div>
      </>
    )
  }
}

export default App
