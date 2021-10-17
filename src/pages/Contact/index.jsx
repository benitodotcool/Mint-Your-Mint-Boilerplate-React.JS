import React from 'react';
import './contact.scss';
import ArrowUp from '../../assets/SVG/ArrowUpLight';

const Contact = () => {

  return (
    <section className="container__section--project" id="contact">
      <div className="container__content">
        <h1>CONTACT</h1>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
            <button className="section--endBTN btnUp">
              <ArrowUp />
              ROADMAP
            </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
