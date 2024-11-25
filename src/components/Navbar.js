import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";
import './styles/Navbar.css'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className='navbar-container '>
      <Link to="/" className='navbar-container-logo' >Stylehub.</Link>
      <div className={`navbar-container-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" >Home</Link>
        <Link to="/" >Shop</Link>
        <Link to="/"> Product</Link>
        <Link to="/"> Contact Us</Link>
      </div>
      <div className = 'navbar-container-icons'>
        < FaSearch />
        < HiOutlineShoppingBag />
        <div className='navbar-container-menu-icon' onClick={toggleMenu}> <TiThMenu /></div>
      </div>

    </div>
  )
}

export default Navbar
