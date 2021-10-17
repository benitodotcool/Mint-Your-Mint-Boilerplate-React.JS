import React from 'react';
import './project.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import ArrowUp from '../../assets/SVG/ArrowUpLight';

const Project = () => {

  return (
    <section className="container__section--project" id="project">
      <div className="container__content">
        <h1 className="section--title">PROJECT</h1>
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
