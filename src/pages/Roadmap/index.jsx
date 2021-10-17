import React from 'react';
import './roadmap.scss';
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
            <button className="section--endBTN btnUp">
              <ArrowUp />
              MINT
            </button>
            <button className="section--endBTN btnDown">
              CONTACT
              <ArrowDown />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
