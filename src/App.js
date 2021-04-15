import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { Home, AboutMe, Contact } from './pages';
import { Header, Footer } from './layout';

import './App.css';



function App () {
  return(
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about_me" component={AboutMe} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );

};

export default App