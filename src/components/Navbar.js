import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";
import { MdFavoriteBorder } from "react-icons/md";
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
        <Link to="/" >Mens</Link>
        <Link to="/"> Womens</Link>
        <Link to="/"> Contact Us</Link>
      </div>
      <div className = 'navbar-container-icons'>
        <IoSearchOutline  />
        <MdFavoriteBorder />
        <HiOutlineShoppingBag />
        <div className='navbar-container-menu-icon' onClick={toggleMenu}> <TiThMenu /></div>
      </div>

    </div>
  )
}

export default Navbar
