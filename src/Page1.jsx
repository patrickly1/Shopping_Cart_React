import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Page1 = ({ Cart, updateCart }) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
            .then(res=>res.json())
            .then(json=>setCardData(json))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
      <>
        <h2>Women's clothing</h2>
        <div className="Card2">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    Cart={Cart}
                    updateCart={updateCart}
                />
            ))}
        </div>
        <div className="bottomLinks">
                <div id="mainLink">
                    <Link to="/">Back to Main Page</Link>
                </div>
                <div id="purchaseLink">
                    <Link to="/Purchase">Purchase your items</Link>
                </div>
            </div>
      </>
    );
  };

export default Page1;