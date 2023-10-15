import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/accounts">Accounts</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Transactions</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Log In</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
