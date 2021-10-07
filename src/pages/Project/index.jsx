import React from 'react';
import './project.scss';
import Footer from '../../components/Footer';

const Project = () => {

  return (
    <div className="container__project--all">
      <div>
        <p>
          The Mint Your Mint project comes from a group of friends passionate about technology, <br/>
          art and nfts. It started as a joke and ended up with a serious and ambitious project. <br/>
          Mints properties have been designed by our talented <a href="https://twitter.com/thesalvare" target="_blank" rel="noreferrer">@TheSalvare</a>.
          <br/>
          <br/>
          Mint Your Mint is a collection of 10’000 unique NFTS on the Ethereum blockchain.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
