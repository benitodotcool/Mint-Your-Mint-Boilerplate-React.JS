import React from 'react';
import './home.scss';
import ArrowDown from '../../assets/SVG/ArrowDownLight';

const Home = () => {

  return (
    <section className="container__section--home" id="home">
      <div className="container__content home--Section">
        <div className="container--title--subtitle">
          <h1 className="title">MINT<br/>YOUR<br/>MINT</h1>
          <h3 className="subtitle">To mint mints<br/>is what we like to mint</h3>
        </div>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
          <button className="section--endBTN btnDown">
            PROJECT
            <ArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
