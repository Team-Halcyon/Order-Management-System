import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Order Management</Link>
      <Link to="/inventory">Inventory Management</Link>
      <Link to="/shipment">Shipment Management</Link>
    </nav>
  );
};

export default Navbar;
