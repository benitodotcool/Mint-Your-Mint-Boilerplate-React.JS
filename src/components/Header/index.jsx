import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {

  return (
    <header className="container__header">
      <div className="container__logo">
        <Link to="/#home">
          Mint Your Mint
        </Link>
      </div>
      <nav className="container__navbar--links">
        <ul className="navbar--links">
          <li className="links">
            <Link to="/#project">
              Project
            </Link>
          </li>
          <li className="links">
            <Link to="/#mint">
              Mint
            </Link>
          </li>
          <li className="links">
            <Link to="/#roadmap">
              Roadmap
            </Link>
          </li>
          <li className="links">
            <Link to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
