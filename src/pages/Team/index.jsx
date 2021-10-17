import React from 'react';
import './team.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import ArrowUp from '../../assets/SVG/ArrowUpLight';

const Team = () => {

  return (
    <section className="container__section--project" id="team">
      <div className="container__content">
        <h1 className="section--title">TEAM</h1>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
          <NavHashLink
            smooth
            to="/#roadmap"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnUp">
              <ArrowUp />
              ROADMAP
            </button>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#contact"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnDown">
              CONTACT
              <ArrowDown />
            </button>
          </NavHashLink>
        </div>
      </div>
    </section>
  );
};

export default Team;
