import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import './Styles/DefaultPage.css'; 

const DefaultPage = ({ Cart, updateCart, Price, updatePrice }) => {
  //Update cardData state when fetchingfrom API
  const [cardData, setCardData] = useState([]);

  //Fetch data from FakeStoreAPI
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then((res) => res.json())
      .then((json) => setCardData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="default-page-container">
      <h1>Welcome to the Shopping Page</h1>
      <h2 className="default-page-title">Men's clothing</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            price={card.price}
            Cart={Cart}
            updateCart={updateCart}
            Price={Price}
            updatePrice={updatePrice}
          />
        ))}
      </div>
      <div className="bottom-links">
        <div id="mainLink">
          <Link to="/">Back to Main Page</Link>
        </div>
        <div id="purchaseLink">
          <Link to="/Purchase">Purchase your items</Link>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
