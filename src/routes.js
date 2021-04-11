import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SportList from './containers/SportList';
import AddSport from './components/AddSport';

const Routes = () => (
  <Switch>
    {/* <Route path="/stock/:stock" exact component={Stock} /> */}
    <Route path="/feed" exact component={SportList} />
    <Route path="/" exact component={AddSport} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
