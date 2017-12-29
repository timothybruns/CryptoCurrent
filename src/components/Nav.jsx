import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav  = () => {
  return (
    <nav className="navbar" aria-label="main navigation">
      <NavLink to="/" exact className="nav-item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-item" activeClassName="active">
        About Us
      </NavLink>
      <NavLink to="/people" className="nav-item" activeClassName="active">
        Resources
      </NavLink>
    </nav>
  );
};

export default Nav;
