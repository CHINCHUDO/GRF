import React from 'react';
import logo from './imgAssets/GRF_logo_2.png';
// import logo from './logo.svg';
import './App.css';
// import HomeComponent from './components/HomeComponent';
import GRFTitle from './components/GRFTitleComponent';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
  } from "react-router-dom";
// import AboutComponent from './components/AboutComponent';

const navStyle = {
    color: 'white',
    // text-decoration: none
};

function Nav() {
  return (
      <nav class="Nav">
            <img  src={logo} className="nav-Logo" alt="logo" />
            <h3><GRFTitle /></h3>
            <ul className="nav-Links">
                <li>
                    <Link style={navStyle} className="nav-Link" to="/">Home</Link>
                </li>
                <li>
                    <Link style={navStyle} className="nav-Link" to="/about">About</Link>
                </li>
                <li>
                    <Link style={navStyle} className="nav-Link" to="/contact">Contact</Link>
                </li>
                <li>
                    <Link style={navStyle} className="nav-Link" to="/topics">Topics</Link>
                </li>
            </ul>
        </nav>
  );
}

export default Nav;