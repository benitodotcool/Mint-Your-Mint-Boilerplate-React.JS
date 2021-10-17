import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/reset.scss';
import './styles/main.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import Mint from './pages/Mint';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';
import Contact from './pages/Contact';

const App = () => {
  
  return (
    <Router>
      <div className="container__fixed--all">
        <div className="container__header--all">
          <Header />
        </div>
        <div className="container__content--all">
          <Home />
          <Project />
          <Mint />
          <Roadmap />
          <Team />
          <Contact />
        </div>
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
