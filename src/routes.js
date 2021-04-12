import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SportList from './containers/SportList';
import AddSport from './components/AddSport';
import SingleSport from './containers/SingleSport';
import Progress from './components/Progress';

const Routes = () => (
  <Switch>
    <Route path="/sports/:sport" exact component={SingleSport} />
    <Route path="/feed" exact component={SportList} />
    <Route path="/" exact component={AddSport} />
    <Route path="/progress" exact component={Progress} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
