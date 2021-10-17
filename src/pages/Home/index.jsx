import React from 'react';
import './home.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import Title from '../../assets/Logo/Title';
import Subtitle from '../../assets/Logo/Subtitle';

const Home = () => {

  return (
    <section className="container__section--home" id="home">
      <div className="container__content home--Section">

          <div className="container--title--subtitle">
              <Title />
              <Subtitle />
            {/* <h1 className="title">MINT<br/>YOUR<br/>MINT</h1>
            <h3 className="subtitle">To mint mints<br/>is what we like to mint</h3> */}
          </div>

      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
          <NavHashLink
            smooth
            to="/#project"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnDown">
              PROJECT
              <ArrowDown />
            </button>
          </NavHashLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
