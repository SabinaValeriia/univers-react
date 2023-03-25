import React, { Component } from "react";
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import '../css/Header.css'
class Header extends Component {
  render(selectedItemsCount) {
    return (
        /* eslint-disable */
      <header className="header">
        <div className="logo">
          <img src={logo}  />
          <p>You have selected {selectedItemsCount} items.</p>
        </div>
        <Link to="/about">Home</Link>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              
              {/* <a href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <a href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
