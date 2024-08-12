import { Link } from "react-router-dom";
import Card from './Card';
import React, { useState, useEffect } from "react";
import './Styles/Pages.css'

const Page2 = ({ Cart, updateCart }) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => setCardData(json))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
      <div className="page2-container">
        <h2 className="page2-title">Electronics</h2>
        <div className="card-container">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    price={card.price}
                    Cart={Cart}
                    updateCart={updateCart}
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

export default Page2;
