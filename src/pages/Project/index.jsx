import React from 'react';
import './project.scss';
import { NavHashLink } from 'react-router-hash-link';
import ArrowDown from '../../assets/SVG/ArrowDownLight';
import ArrowUp from '../../assets/SVG/ArrowUpLight';
import Img1 from '../../assets/images/mint_your_mint_1.jpeg'
import Img2 from '../../assets/images/mint_your_mint_2.jpeg'
import Img3 from '../../assets/images/mint_your_mint_3.jpeg'
import Img4 from '../../assets/images/mint_your_mint_4.jpeg'
import Img5 from '../../assets/images/mint_your_mint_5.jpeg'
import Img6 from '../../assets/images/mint_your_mint_6.jpeg'
import Img7 from '../../assets/images/mint_your_mint_7.jpeg'
import Img8 from '../../assets/images/mint_your_mint_8.jpeg'
import Img9 from '../../assets/images/mint_your_mint_9.jpeg'
import Img10 from '../../assets/images/mint_your_mint_10.jpeg'
import Img11 from '../../assets/images/mint_your_mint_11.jpeg'
import Img12 from '../../assets/images/mint_your_mint_12.jpeg'

const Project = () => {

  return (
    <section className="container__section--project" id="project">
      <div className="container__content project">
        <h1 className="section--title">PROJECT</h1>
        <div className="container__description">
          <ul className="container__imgs--all">
            <li className="item--img"><img className="img" src={Img1} alt="" /></li>
            <li className="item--img"><img className="img" src={Img2} alt="" /></li>
            <li className="item--img"><img className="img" src={Img3} alt="" /></li>
            <li className="item--img"><img className="img" src={Img4} alt="" /></li>
            <li className="item--img"><img className="img" src={Img5} alt="" /></li>
            <li className="item--img"><img className="img" src={Img6} alt="" /></li>
            <li className="item--img"><img className="img" src={Img7} alt="" /></li>
            <li className="item--img"><img className="img" src={Img8} alt="" /></li>
            <li className="item--img"><img className="img" src={Img9} alt="" /></li>
            <li className="item--img"><img className="img" src={Img10} alt="" /></li>
            <li className="item--img"><img className="img" src={Img11} alt="" /></li>
            <li className="item--img"><img className="img" src={Img12} alt="" /></li>
          </ul>
          <p className="medium-size">
            The Mint Your Mint project comes from a group of friends passionate about technology,
            art and nfts. It started as a joke and ended up with a serious and ambitious project.
            Mints properties have been designed by our talented <a href="https://twitter.com/thesalvare" target="_blank" rel="noreferrer">@TheSalvare</a>.
            <br/>
            <br/>
            Mint Your Mint is a collection of 10’000 unique NFTS on the Ethereum blockchain.
          </p>
        </div>
      </div>
      <div className="container__CTA--btn">
        <div className="CTA--btns">
          <NavHashLink
            smooth
            to="/#home"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnUp">
              <ArrowUp />
              HOME
            </button>
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#mint"
            activeClassName="selected"
            activeStyle={{ color: '#f6f829' }}
          >
            <button className="section--endBTN btnDown">
              MINT
              <ArrowDown />
            </button>
          </NavHashLink>
        </div>
      </div>
    </section>
  );
};

export default Project;
