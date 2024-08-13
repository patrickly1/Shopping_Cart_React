import React from "react";
import { Link } from "react-router-dom";
import "./Styles/NavBar.css"; 

const NavBar = ({ Cart, Price}) => {


  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link to="/">Home page</Link>
          <Link to="/shopping/DefaultPage">Men's clothing</Link>
          <Link to="/shopping/Page1">Women's clothing</Link>
          <Link to="/shopping/Page2">Electronics</Link>
          <Link to="/shopping/Page3">Jewelery</Link>
        </div>
        <div className="navbar-right"> 
          <div className="navbar-cart">
            Cart ({Cart}) 
          </div>
          <div className="navbar-price">
            {/* Price rounded to two decimal points to represent correct dollar/cent format */}
            Price: ${Price.toFixed(2)}
          <div className="navbar-checkout">
            <Link to="/Purchase">Checkout</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
