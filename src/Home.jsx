import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Home.css'

const Home = () => {
  return (
    <div className="home-page-container">
      <h1 className="home-page-title">Welcome to the Home Page</h1>
      <div className="home-page-links">
        <div className="home-page-link-item">
          <Link className="home-page-link" to="/shopping/DefaultPage">Men's clothing</Link>
        </div>
        <div className="home-page-link-item">
          <Link className="home-page-link" to="/shopping/Page1">Women's clothing</Link>
        </div>
        <div className="home-page-link-item">
          <Link className="home-page-link" to="/shopping/Page2">Electronics</Link>
        </div>
        <div className="home-page-link-item">
          <Link className="home-page-link" to="/shopping/Page3">Jewelery</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
