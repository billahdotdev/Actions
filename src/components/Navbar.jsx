import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="brand">
          <div className="name">Masum Billah</div>
          <div className="designation">
            Web Developer | Founder of{" "}
            <a
              href="https://garmentik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="garmentik-link"
            >
              GARMENTIK
            </a>
          </div>
        </div>
        <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Servies</Link></li>
          <li><Link to="/works" onClick={toggleMenu}>Works</Link></li>
          <li><Link to="/learn" onClick={toggleMenu}>Learn</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/shop" onClick={toggleMenu} className="cta-button">Shop</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
