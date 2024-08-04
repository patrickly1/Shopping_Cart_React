import { Link } from "react-router-dom";
import Card from "./Card";

const DefaultPage = () => {
    return <>
    <p>Insert items here</p>
    <Card />
    <div>
        <Link to="/">Back to Main Page</Link>
    </div>
    <Link to="/Purchase">Purchase your items</Link>
    </> 
    
  };
  
  export default DefaultPage;
  