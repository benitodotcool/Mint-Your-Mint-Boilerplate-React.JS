import React from 'react';
import './project.scss';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import ArrowUp from '../../assets/SVG/ArrowUpLight';

const Project = () => {

  return (
    <section className="container__section--project">
      <div className="container__content">
        <h1>CONTENT PROJECT</h1>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
            <button className="section--endBTN btnUp">
              <ArrowUp />
              HOME
            </button>
            <button className="section--endBTN btnDown">
              MINT
              <ArrowDown />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
