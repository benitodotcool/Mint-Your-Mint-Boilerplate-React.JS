import React from 'react';
import './mint.scss';
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
            <button className="section--endBTN btnUp">
              <ArrowUp />
              PROJECT
            </button>
            <button className="section--endBTN btnDown">
              ROADMAP
              <ArrowDown />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Mint;
