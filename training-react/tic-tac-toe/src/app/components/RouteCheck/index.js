import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from '@consts/route';
import Home from '@screens/Home';
import Login from '@screens/Login';
import ErrorPage from '@screens/ErrorPage';

import ValidateRoute from './components/ValidateRoute';

function RouteCheck() {
  return (
    <Router>
      <Switch>
        <ValidateRoute exact path={ROUTES.LOGIN} component={Login} />
        <ValidateRoute isPrivate component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default RouteCheck;
