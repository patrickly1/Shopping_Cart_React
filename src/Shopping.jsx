import { useParams, useOutletContext } from 'react-router-dom';
import DefaultPage from './DefaultPage';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import React from 'react';
import Home from './Home';
import './Styles/Shopping.css'

const Shopping = ({ Cart, updateCart, Price, updatePrice}) => {
  const { name } = useParams();

  // Decide which category of shopping based on the shopping/name paramter
  // If none, show home page
  return (
    <>
      <h1>Welcome to the Shopping Page</h1>
      {name === "Page1" ? (
        <Page1 Cart={Cart} updateCart={updateCart} Price={Price} updatePrice={updatePrice}/>
      ) : name === "Page2" ? (
        <Page2 Cart={Cart} updateCart={updateCart} Price={Price} updatePrice={updatePrice}/>
      ) : name === "Page3" ? (
        <Page3 Cart={Cart} updateCart={updateCart} Price={Price} updatePrice={updatePrice}/>
      ) : name === "DefaultPage" ? (
        <DefaultPage Cart={Cart} updateCart={updateCart} Price={Price} updatePrice={updatePrice}/>
      ) : (
        <Home/>
      )}
    </>
  );
};

export default Shopping;
