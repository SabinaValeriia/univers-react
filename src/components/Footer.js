import React from "react";
import styles from "../css/Footer.module.css";

class Footer extends React.Component {
  render() {
    return (
         /* eslint-disable */
      <footer className={styles.footer}>
        <div className={styles['footer-menu']}>
          <div className={styles['footer-menu-item']}>FAQs</div>
          <div className={styles['footer-menu-item']}>Contact Us</div>
          <div className={styles['footer-menu-item']}>Shipping & Returns</div>
          <div className={styles['footer-menu-item']}>Privacy Policy</div>
          <div className={styles['footer-menu-item']}>Terms of Service</div>
        </div>
        <div className={styles['footer-menu-item']}>© 2021, Prismatic Plants</div>
      </footer>
    );
  }
}

export default Footer;
