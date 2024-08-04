import { Link } from "react-router-dom";
import Card from "./Card";
import cardData from "./Data/CardData";

const DefaultPage = ({ Cart, updateCart }) => {
    return (
        <>
            <div class="Card0">
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
            <div class="bottomLinks">
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
  
export default DefaultPage;
  