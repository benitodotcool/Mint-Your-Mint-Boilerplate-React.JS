import React from 'react';
import './team.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import ArrowUp from '../../assets/SVG/ArrowUpLight';
import BenitoIMG from '../../assets/images/TEAM/benitodotcool.jpeg';

const Team = () => {

  return (
    <section className="container__section--team" id="team">
      <div className="container__content">
        <h1 className="section--title">TEAM</h1>
        <div className="container__team--all">
          <ul className="team--all">
            <li className="team--unit">
              <div className="container--img">
                <img src={BenitoIMG} alt="TheSalvare profile" />
              </div>
              <div className="container--text">
                <div className="unit--name">TheSalvare</div>
                <div className="unit--job">Artist</div>
              </div>
            </li>
            <li className="team--unit">
              <div className="container--img">
                <img src={BenitoIMG} alt="BigV profile" />
              </div>
              <div className="container--text">
                <div className="unit--name">BigV</div>
                <div className="unit--job">Co-Founder</div>
              </div>
            </li>
            <li className="team--unit">
              <div className="container--img">
                <img src={BenitoIMG} alt="UK profile" />
              </div>
              <div className="container--text">
                <div className="unit--name">UK</div>
                <div className="unit--job">Co-Founder</div>
              </div>
            </li>
            <li className="team--unit">
              <div className="container--img">
                <img src={BenitoIMG} alt="MerlinLab profile" />
              </div>
              <div className="container--text">
                <div className="unit--name">MerlinLab</div>
                <div className="unit--job">Solidity developper</div>
              </div>
            </li>
            <li className="team--unit">
              <div className="container--img">
                <img src={BenitoIMG} alt="Jaffie profile" />
              </div>
              <div className="container--text">
                <div className="unit--name">Jaffie</div>
                <div className="unit--job">Community Manager</div>
              </div>
            </li>
            <li className="team--unit">
              <div className="container--img">
                <img src={BenitoIMG} alt="CY profile" />
              </div>
              <div className="container--text">
                <div className="unit--name">CY</div>
                <div className="unit--job">Project Advisor</div>
              </div>
            </li>
            <li className="team--unit">
              <div className="container--img">
                <img src={BenitoIMG} alt="Ape profile" />
              </div>
              <div className="container--text">
                <div className="unit--name">Ape</div>
                <div className="unit--job">Ape???</div>
              </div>
            </li>
            <li className="team--unit">
              <div className="container--img">
                <img src={BenitoIMG} alt="benitodotcool profile" />
              </div>
              <div className="container--text">
                <div className="unit--name">benitodotcool</div>
                <div className="unit--job">Web Developper</div>
              </div>
            </li>
          </ul>
        </div>
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
