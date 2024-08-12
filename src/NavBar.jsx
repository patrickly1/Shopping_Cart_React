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
        <div className="nvbar-right"> 
          <div className="navbar-cart">
            Cart ({Cart}) 
          </div>
          <Link to="/Purchase">Checkout</Link>
          <div className="navbar-price">
            Price: ${Price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
