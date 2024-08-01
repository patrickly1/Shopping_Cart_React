import { Link, Outlet, useParams } from 'react-router-dom';
import DefaultPage from './DefaultPage.jsx';
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";

function Home () {
    const { name } = useParams();

    return (
        <>
          <h1>This is the home page</h1>
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
    
export default Home

