import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to="/shopping/DefaultPage">Go to Shopping Page</Link>
      </div>
      <div>
        <Link to="/shopping/Page1">Go to another Shopping Page</Link>
      </div>
      <div>
        <Link to="/shopping/Page2">Go to the last Shopping Page</Link>
      </div>
    </>
  );
};

export default Home;
