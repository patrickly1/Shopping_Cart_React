import { Link } from "react-router-dom";
import Card from "./Card";
import cardData2 from "./Data/CardData2";

const Page1 = ({ Cart, updateCart }) => {
    return (
      <>
        <div class="Card2">
            {cardData2.map((card, index) => (
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

export default Page1;