import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </>
);

export default Navbar;
