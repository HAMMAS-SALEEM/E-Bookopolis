import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <header className="header-container">
    <nav className="nav-container">
      <h1 className="nav-title">E-Bookopolis</h1>
      <Link to="/" className="nav-link">Books</Link>
      <Link to="/categories" className="nav-link">Categories</Link>
    </nav>
    <FontAwesomeIcon className="user-icon-container" icon={faUser} />
  </header>
);

export default Navbar;
