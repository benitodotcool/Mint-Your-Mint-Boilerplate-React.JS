import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './styles/reset.scss';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Project from './pages/Project';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <Router>
      <div className="container__fixed--all">
        <div className="container__title--all">
          <Title />
          <Subtitle />
        </div>
        <Carousel />
        <Switch>
          <Route path="/" exact render={() => <Home />}/>
          <Route path="/mint" exact render={() => <Mint />}/>
          <Route path="/project" render={() => <Project />}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
