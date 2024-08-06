import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to="/shopping/DefaultPage">Men's clothing</Link>
      </div>
      <div>
        <Link to="/shopping/Page1">Women's clothing</Link>
      </div>
      <div>
        <Link to="/shopping/Page2">Electronics</Link>
      </div>
      <div>
        <Link to="/shopping/Page3">Jewelery</Link>
      </div>
    </>
  );
};

export default Home;
