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

  const scrollToContact = () => {
    closeMenu();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">Portfolio</Link>
      
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
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
          <Link to="/skills" onClick={closeMenu}
                className={location.pathname === '/skills' ? 'active' : ''}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={closeMenu}
                className={location.pathname === '/testimonials' ? 'active' : ''}>
            Testimonials
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

      <button className="nav-mob-open" onClick={() => setIsOpen(true)}>
        <FaBars />
      </button>
      <button className="nav-mob-close" onClick={() => setIsOpen(false)}>
        <FaTimes />
      </button>
      
      <button onClick={scrollToContact} className="nav-connect">
        Connect with me
      </button>
    </div>
  )
}

export default NavBar