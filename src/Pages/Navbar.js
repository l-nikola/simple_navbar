// Corrected: src/Pages/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Simple Navbar</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
        <li>
          <Link to="/page3">Page 3</Link>
        </li>
        <li>
          <Link to="/page4">Page 4</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
