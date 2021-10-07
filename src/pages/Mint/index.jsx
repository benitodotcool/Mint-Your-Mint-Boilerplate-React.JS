import React, { useState } from 'react';
import './mint.scss';
import Footer from '../../components/Footer';

const Mint = () => {
  const [inputValue, setInputValue] = useState(1);

  const updateInputValue = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="container__mint--all">
      <div className="container__btn--all">
        <input
          className="first--element"
          autoFocus
          type="number"
          max="10"
          onChange={updateInputValue}
          value={inputValue}
        />
        <button>
          Mint!
        </button>
        <p className="label--mint">
          0.06 + Gas price, 10 Mint max per transaction
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Mint;
