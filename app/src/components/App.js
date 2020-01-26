/* *
  title: App.js 

  date: 7/19/2019

  author:  javier olaya

  description: holds all the routes for this application 
         
 */
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Whoops404, Contacts, Profile } from '../pages';
import pages from '../css/index.scss';
import LoginContainer from '../containers/LoginContainer';
import SecreteContainer from '../containers/SecreteContainer';

const App = () =>
  <Router>
    <Switch>
      <Route path="/" exact component={LoginContainer} />
      <Route path="/Profile" component={Profile} />
      <SecreteContainer path='/Contacts' component={Contacts} ></SecreteContainer>
      <Route component={Whoops404} />
    </Switch>
  </Router>

export default App;