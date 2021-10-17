import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './header.scss'

const Header = () => {

  return (
    <header className="container__header">
      <div className="container__logo">
        <NavHashLink
          smooth
          to="/#home"
          activeClassName="selected"
          activeStyle={{ color: '#f6f829' }}
        >
          Mint Your Mint
        </NavHashLink>
      </div>
      <nav className="container__navbar--links">
        <ul className="navbar--links">
          <li className="links">
            <NavHashLink
              smooth
              to="/#project"
              activeClassName="selected"
              activeStyle={{ color: '#f6f829' }}
            >
              Project
            </NavHashLink>
          </li>
          <li className="links">
            <NavHashLink
              smooth
              to="/#mint"
              activeClassName="selected"
              activeStyle={{ color: '#f6f829' }}
            >
              Mint
            </NavHashLink>
          </li>
          <li className="links">
            <NavHashLink
              smooth
              to="/#roadmap"
              activeClassName="selected"
              activeStyle={{ color: '#f6f829' }}
            >
              Roadmap
            </NavHashLink>
          </li>
          <li className="links">
            <NavHashLink
              smooth
              to="/#team"
              activeClassName="selected"
              activeStyle={{ color: '#f6f829' }}
            >
              Team
            </NavHashLink>
          </li>
          <li className="links">
            <NavHashLink
              smooth
              to="/#contact"
              activeClassName="selected"
              activeStyle={{ color: '#f6f829' }}
            >
              Contact
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
