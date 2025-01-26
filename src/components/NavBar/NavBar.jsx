import React, { useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">Portfolio</Link>
      <FaBars className="nav-mob-open" onClick={() => setIsOpen(!isOpen)} />

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <FaTimes className="nav-mob-close" onClick={() => setIsOpen(false)} />
        
        <li>
          <Link to="/" onClick={closeMenu} 
                className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}
                className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}
                className={location.pathname === '/services' ? 'active' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}
                className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}
                className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
      
      <Link to="/contact" className="nav-connect">Connect with me</Link>
    </div>
  )
}

export default NavBar