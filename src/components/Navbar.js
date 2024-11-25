import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import './styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-container '>
      <Link to="/" className='navbar-container-logo' >Stylehub.</Link>
      <div className='navbar-container-links'>
        <Link to="/" >Home</Link>
        <Link to="/" >Shop</Link>
        <Link to="/"> Product</Link>
        <Link to="/"> Contact Us</Link>
      </div>
      <div className = 'navbar-container-icons'>
        < FaSearch />
        < HiOutlineShoppingBag />
      </div>
    </div>
  )
}

export default Navbar
