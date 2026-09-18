import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/apply">Apply</Link>
      <Link to="/track-status">Track Status</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;