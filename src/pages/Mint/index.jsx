import React from 'react';
import './mint.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import ArrowUp from '../../assets/SVG/ArrowUpLight';

const Mint = () => {

  return (
    <section className="container__section--project" id="mint">
      <div className="container__content">
        <h1>MINT</h1>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
          <NavHashLink
            smooth
            to="/#project"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnUp">
              <ArrowUp />
              PROJECT
            </button>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#roadmap"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnDown">
              ROADMAP
              <ArrowDown />
            </button>
          </NavHashLink>
        </div>
      </div>
    </section>
  );
};

export default Mint;
