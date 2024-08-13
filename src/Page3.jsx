import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import './Styles/Pages.css';

const Page3 = ({ Cart, updateCart, Price, updatePrice }) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => setCardData(json))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
      <div className="page3-container">
        <h1>Welcome to the Shopping Page</h1>
        <h2 className="page3-title">Jewelery</h2>
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

export default Page3;
