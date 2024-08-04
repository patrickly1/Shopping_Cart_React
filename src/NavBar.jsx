import React from "react";
import { Link } from 'react-router-dom';


const NavBar = ({ Cart }) => {
    return (
        <>
            <div>This is the Nav Bar</div>
            <div>
                <Link to="/">Back to Home page</Link>
            </div>
            <div>
                <Link to="/shopping/DefaultPage">Default Shopping Page</Link>
            </div>
            <div>
                <Link to="/shopping/Page1">Page1</Link>
            </div>
            <div>
                <Link to="/shopping/Page2">Page2</Link>
            </div>
            <div>
                <div>
                    Cart ({Cart}) <Link to="/Purchase">Checkout</Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;
