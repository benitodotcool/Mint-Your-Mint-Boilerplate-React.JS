import React from 'react';
import './carousel.scss'
import Img1 from '../../assets/images/mint_your_mint_1.jpeg'

const Carousel = () => {

  return (
    <ul className="container__carousel--item">
      <li className="carousel--item">
        <img src={Img1} alt="Logo" className="square--img"/>
      </li>
      <li className="carousel--item">
        <img src={Img1} alt="Logo" className="square--img"/>
      </li>
      <li className="carousel--item">
        <img src={Img1} alt="Logo" className="square--img"/>
      </li>
      <li className="carousel--item">
        <img src={Img1} alt="Logo" className="square--img"/>
      </li>
      <li className="carousel--item">
        <img src={Img1} alt="Logo" className="square--img"/>
      </li>
      <li className="carousel--item">
        <img src={Img1} alt="Logo" className="square--img"/>
      </li>
      <li className="carousel--item">
        <img src={Img1} alt="Logo" className="square--img"/>
      </li>
    </ul>
  );
};

export default Carousel;
