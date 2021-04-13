import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SportList from './containers/SportList';
import AddSport from './components/AddSport';
import SingleSport from './containers/SingleSport';
import Progress from './components/Progress';
import More from './components/More';

const Routes = () => (
  <Switch>
    <Route path="/sports/:sport" exact component={SingleSport} />
    <Route path="/feed" exact component={SportList} />
    <Route path="/" exact component={AddSport} />
    <Route path="/progress" exact component={Progress} />
    <Route path="/more" exact component={More} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
