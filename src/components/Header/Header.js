import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Hamburger from "../../components/Hamburger/Hamburger";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="">
          <img src={logo} alt="logo" />
        </a>
        <Hamburger />
        <div className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/TechSpecs">Tech Specs</Link>
            </li>
            <li>
              <Link to="/Compare">Compare</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
