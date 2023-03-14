import React from "react";
import "../css/Footer.css";

class Footer extends React.Component {
  render() {
    return (
         /* eslint-disable */
      <footer className="footer">
        <div className="footer-menu">
          <div className="footer-menu-item">FAQs</div>
          <div className="footer-menu-item">Contact Us</div>
          <div className="footer-menu-item">Shipping & Returns</div>
          <div className="footer-menu-item">Privacy Policy</div>
          <div className="footer-menu-item">Terms of Service</div>
        </div>
        <div className="footer-menu-item">© 2021, Prismatic Plants</div>
      </footer>
    );
  }
}

export default Footer;
