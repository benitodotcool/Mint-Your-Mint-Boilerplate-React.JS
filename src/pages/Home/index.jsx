import React from 'react';
import './home.scss';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="container__home--all">
      <div className="container__btn--all">
        <Link to="/project">
          <button>Project</button>
        </Link>
        <Link to="/mint">
          <button>Mint</button>
        </Link>
      </div>
      <Footer />
  </div>
  );
};

export default Home;
