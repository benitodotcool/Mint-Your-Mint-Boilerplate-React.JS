import React from 'react';
import './header.scss'

const Header = () => {

  return (
    <header className="container__header--all">
      <div className="container__logo--all">
        <div className="logo">
          Mint Your Mint
        </div>
      </div>
      <div className="container__navLinks--all">
        <ul className="container__navLinks">
          <li className="navLinks">project</li>
          <li className="navLinks">mint</li>
          <li className="navLinks">roadmap</li>
          <li className="navLinks">team</li>
          <li className="navLinks">faq</li>
          <li className="navLinks">community</li>
        </ul>
      </div>
    </header>
  );
};

export default Header