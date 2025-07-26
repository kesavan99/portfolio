import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import { navbarData } from '../configuaration/data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h2>{navbarData.title}</h2>
      </Link>
      <ul className="nav-links">
        {navbarData.page.map((link, index) => (
          <li key={index}>
            <Link to={link.href} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;