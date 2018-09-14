import React from 'react';
import Login from './Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Overview from './Overview';
import PrivateRoute from './primitives/PrivateRoute';
import AdminRoute from './primitives/AdminRoute';
import Majstor from './components/Majstor';
import Navigation from './components/Navigation';
import DataProvider from './DataProvider';
import LogoBar from "./components/LogoBar";
import Admin from './Admin';

const app = () => (
  <BrowserRouter>
    <div>
      <DataProvider>
        <Navigation />
        <LogoBar />
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route exact path='/login' component={Login} />
          <PrivateRoute path='/overview' component={Overview} />
          <PrivateRoute path='/majstori/:id' component={Majstor} />
          <AdminRoute path='/admin' component={Admin} />
        </Switch>
      </DataProvider>
    </div>
  </BrowserRouter>
);

export default app;
