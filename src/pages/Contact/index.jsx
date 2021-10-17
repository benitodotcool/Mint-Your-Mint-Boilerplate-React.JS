import React from 'react';
import './contact.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowUp from '../../assets/SVG/ArrowUpLight';

const Contact = () => {

  return (
    <section className="container__section--project" id="contact">
      <div className="container__content">
        <h1>CONTACT</h1>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
          <NavHashLink
            smooth
            to="/#team"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnUp">
              <ArrowUp />
              TEAM
            </button>
          </NavHashLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;
