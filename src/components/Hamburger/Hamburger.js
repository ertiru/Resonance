import React from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return (
    <nav role="navigation">
      <div className="menuToggle">
        <input type="checkbox" id="menuCheckbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
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
    </nav>
  );
};

export default Hamburger;
