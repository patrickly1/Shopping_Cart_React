import { Link } from "react-router-dom";
import Card from "./Card";

const Page2 = ({ Cart, updateCart }) => {
    return (
      <>
        <p>Insert items here. Page2 </p>
        <Card Cart={Cart} updateCart={updateCart} />
        <div>
          <Link to="/">Back to Main Page</Link>
        </div>
        <Link to="/Purchase">Purchase your items</Link>
      </>
    );
  };

export default Page2