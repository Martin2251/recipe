import React from "react";
import "../App.css";
import logo from "../Images/logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <p className="footer-link">Wonderful Recipes</p>
        <a href="#">
          <img className="logo" src={logo} />
        </a>
      </div>
      <div className="contact">
        <p className="footer-link">Contact us</p>
        <ul className="footer-list">
          <li>martinlowe673@gmail.com</li>
          <li>020 7009 2121</li>
          <li>New Cross</li>
          <li>London</li>
        </ul>
      </div>
      <div className="footer-legal">
        <p className="footer-link">Legal</p>
        <ul className="footer-list">
          <li>Terms & Conditions</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
