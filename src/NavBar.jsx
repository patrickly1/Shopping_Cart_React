import React from "react";
import { Link } from "react-router-dom";
import "./Styles/NavBar.css"; // Ensure this path is correct

const NavBar = ({ Cart }) => {
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
        <div className="navbar-cart">
          Cart ({Cart}) <Link to="/Purchase">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
