import React from 'react'
import { Switch, Route } from 'react-router-dom';

import * as Pages from './pages';
import { Header, Footer } from './layout';

import './App.css';

function App () {
  return(
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route path="/about_me" component={Pages.AboutMe} />
        <Route path="/projects" component={Pages.Projects} />
        <Route path="/contact" component={Pages.Contact} />
        <Route component={Pages.NotFound} />
      </Switch>
      <Footer />

    </>
  );
}

export default App;