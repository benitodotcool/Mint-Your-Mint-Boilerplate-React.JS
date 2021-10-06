import React from 'react';
import './mint.scss';
import Footer from '../../components/Footer';

const Mint = () => {

  return (
    <div className="container__mint--all">
      <div className="container__btn--all">
        <input
        className="first--element"
        autoFocus
        type="number"
        max="10"
        value="0" />
        <button>
          Mint!
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Mint;
