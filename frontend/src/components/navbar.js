import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='cart_logo.png' className='logo-img' alt='logo' /> 
      </div>
      <ul className='nav-links'>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/orders">My Orders</Link></li>
      </ul>
    </div>
  )
}
