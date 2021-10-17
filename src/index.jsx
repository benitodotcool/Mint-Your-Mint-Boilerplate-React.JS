import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import './styles/main.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Section from './pages/Section';

const App = () => {
  
  return (
    <div className="container__content--all">
      <Header />
      <Home />
      <Section />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
