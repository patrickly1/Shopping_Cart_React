import { Link } from "react-router-dom";
import './Styles/ErrorPage.css'; 

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <h1 className="error-page-heading">Oh no, this section is under construction!</h1>
      <Link to="/" className="error-page-link">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
