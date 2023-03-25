import React, { Component } from "react";
import logo from '../img/logo.svg';
// import { Link } from 'react-router-dom';
import styles from '../css/Header.module.css'
class Header extends Component {
  render(selectedItemsCount) {
    return (
        /* eslint-disable */
      <header className={styles.header}>
        <div className={styles['logo']}>
          <img src={logo}  />
          <p>You have selected {selectedItemsCount} items.</p>
        </div>
        <nav className={styles['nav']}>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}>
              <a href="#">Home</a>
            </li>
            <li className={styles['nav-item']}>
              <a href="#">Shop</a>
            </li>
            <li className={styles['nav-item']}>
              <a href="#">About</a>
            </li>
            <li className={styles['nav-item']}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
