import React from 'react';
import './roadmap.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import ArrowUp from '../../assets/SVG/ArrowUpLight';

const Roadmap = () => {

  return (
    <section className="container__section--project" id="roadmap">
      <div className="container__content">
        <h1>ROADMAP</h1>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
          <NavHashLink
              smooth
              to="/#mint"
              activeClassName="selected"
              activeStyle={{ color: '#f6f829' }}
            >
              <button className="section--endBTN btnUp">
                <ArrowUp />
                MINT
              </button>
            </NavHashLink>
            <NavHashLink
              smooth
              to="/#team"
              activeClassName="selected"
              activeStyle={{ color: '#f6f829' }}
            >
              <button className="section--endBTN btnDown">
                TEAM
                <ArrowDown />
              </button>
            </NavHashLink>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
