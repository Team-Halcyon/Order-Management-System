import React from 'react'
import './navbar.css'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={assets.cart_logo} className='logo-img' alt='logo' /> 
      </div>
      <ul className='nav-links'>
        <li><Link to='/'>Shop</Link></li>
        <li>Cart</li>
        <li>My Orders</li>
      </ul>
    </div>
  )
}
