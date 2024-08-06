import React from "react";
import { Link } from 'react-router-dom';


const NavBar = ({ Cart }) => {
    return (
        <>
            <div>This is the Nav Bar</div>
            <div>
                <Link to="/">Home page</Link>
            </div>
            <div>
                <Link to="/shopping/DefaultPage">Men's clothing</Link>
            </div>
            <div>
                <Link to="/shopping/Page1">Women's clothing</Link>
            </div>
            <div>
                <Link to="/shopping/Page2">Electronics</Link>
            </div>
            <div>
                <Link to="/shopping/Page3">Jewelery</Link>
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
