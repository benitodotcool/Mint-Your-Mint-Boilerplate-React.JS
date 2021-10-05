import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './styles/reset.scss';
import './styles/main.scss';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Project from './pages/Project';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Carousel from './components/Carousel';

const App = () => {
  
  return (
    <Router>
      <div className="container__fixed--all">
        <div className="container__title--all">
          <Title />
          <Subtitle />
        </div>
        <div className="container__carousel--all">
          <Carousel />
        </div>
        <div className="container__content--all">
          <Switch>
            <Route path="/" exact render={() => <Home />}/>
            <Route path="/mint" render={() => <Mint />}/>
            <Route path="/project" render={() => <Project />}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
