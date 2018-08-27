import React from 'react';
import Login from './Login';
import { Route, Switch, Redirect } from 'react-router-dom';
import Overview from './Overview';
import PrivateRoute from './primitives/PrivateRoute';


const app = () => (
  <div>
    <Switch>
      <Redirect exact from='/' to='/login'/>
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/overview' component={Overview} />
    </Switch>
  </div>
);

export default app;
