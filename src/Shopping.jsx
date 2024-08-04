import { Link, Outlet, useParams } from 'react-router-dom';
import DefaultPage from './DefaultPage.jsx';
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import NavBar from './NavBar.jsx';

function Shopping () {
    const { name } = useParams();

    return (
        <>
          <NavBar />
          <h1>This is the shopping page</h1>
          {name === "Page1" ? (
            <Page1 />
          ) : name === "Page2" ? (
            <Page2 /> 
          ) : (
            <DefaultPage />
          )}
        </>
      )
    }
    
export default Shopping
