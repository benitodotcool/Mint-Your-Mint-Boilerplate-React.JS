import React from 'react';
import './title.scss';
import { Link } from 'react-router-dom';

const Title = () => {

  return (
    <Link to="/">
      <h1 className="title--main">Mint Your Mint</h1>
    </Link>    
  );
};

export default Title;
