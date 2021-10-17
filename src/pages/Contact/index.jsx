import React from 'react';
import './contact.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowUp from '../../assets/SVG/ArrowUpLight';
import Opensea from '../../assets/SVG/Opensea';
import Twitter from '../../assets/SVG/Twitter';
import Discord from '../../assets/SVG/Discord';

const Contact = () => {

  return (
    <section className="container__section--contact" id="contact">
      <div className="container__content contact">
        <h1 className="section--title">CONTACT</h1>
        <div className="container__links--all">
        <ul className="container__links">
          <li className="external--link">
            <a href="https://twitter.com/thesalvare"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="label--svg">Opensea</div>
              <div className="container--svg"><Opensea /></div>          
            </a>
          </li>
          <li className="external--link">
            <a href="https://twitter.com/thesalvare"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="label--svg">Twitter</div>
              <div className="container--svg"><Twitter /></div>          
            </a>
          </li>
          <li className="external--link">
            <a href="https://discord.gg/zmzds7fCUe"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="label--svg">Discord</div>
              <div className="container--svg"><Discord /></div>          
            </a>
          </li>
        </ul>
        </div>
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
