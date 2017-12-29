import React from 'react';
import { Link } from 'react-router-dom';

const Nav  = () => {
  return (
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        <li><Link to="/">Homes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
