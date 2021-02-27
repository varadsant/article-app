import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/articlepage">Article Page</Link>
                </li>
                <li>
                    <Link to="/articlelist">Article List</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;