import React from 'react';
import { Link } from 'react-router-dom';

const Nav  = () => {
  return (
    <ul className="navbarInner">
      <a>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li id="createTab"><Link to="/create">Create Blog</Link></li>
      </a>
    </ul>

  );
};

export default Nav;
