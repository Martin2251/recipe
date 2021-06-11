import React from "react";
import "../App.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="box">
      <a href="#">
        <img className="logo" src={logo} />
      </a>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="header-link-home" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="header-link" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <a className="header-link">Recipes</a>
          </li>
          <li className="nav-item">
            <a className="header-link">Deserts</a>
          </li>
          <li className="nav-item">
            <Link className="header-link" to="/contact">
              Contact
            </Link>
          </li>

          <li className="nav-item-btn">
            <button className="header-link-btn">Sign In</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
