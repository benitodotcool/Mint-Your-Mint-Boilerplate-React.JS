import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {

  return (
    <header className="container__header">
      <div className="container__logo">
        Mint Your Mint
      </div>
      <nav className="container__navbar--links">
        <ul className="navbar--links">
          <li className="links">Project</li>
          <li className="links">Mint</li>
          <li className="links">Roadmap</li>
          <li className="links">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
