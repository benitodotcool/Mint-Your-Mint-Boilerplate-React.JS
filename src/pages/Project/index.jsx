import React from 'react';
import './project.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import ArrowUp from '../../assets/SVG/ArrowUpLight';

const Project = () => {

  return (
    <section className="container__section--project" id="project">
      <div className="container__content project">
        <h1 className="section--title">PROJECT</h1>
        <div className="container__description">
          <p className="medium-size">
            The Mint Your Mint project comes from a group of friends passionate about technology,
            art and nfts. It started as a joke and ended up with a serious and ambitious project.
            Mints properties have been designed by our talented <a href="https://twitter.com/thesalvare" target="_blank" rel="noreferrer">@TheSalvare</a>.
            <br/>
            <br/>
            Mint Your Mint is a collection of 10’000 unique NFTS on the Ethereum blockchain.
          </p>
        </div>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
          <NavHashLink
            smooth
            to="/#home"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnUp">
              <ArrowUp />
              HOME
            </button>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#mint"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnDown">
              MINT
              <ArrowDown />
            </button>
          </NavHashLink>
        </div>
      </div>
    </section>
  );
};

export default Project;
