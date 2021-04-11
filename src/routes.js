import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SportList from './containers/SportList';
import AddSport from './components/AddSport';
import SingleSport from './containers/SingleSport';

const Routes = () => (
  <Switch>
    <Route path="/sports/:sport" exact component={SingleSport} />
    <Route path="/feed" exact component={SportList} />
    <Route path="/" exact component={AddSport} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
