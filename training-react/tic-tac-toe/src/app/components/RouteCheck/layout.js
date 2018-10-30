import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ROUTES from '@consts/route';
import Home from '@screens/Home';
import Login from '@screens/Login';
import HOC from '@components/HOC';

import ValidateRoute from './components/ValidateRoute';

function Layout() {
  return (
    <Router>
      <Switch>
        <ValidateRoute exact path={ROUTES.LOGIN} component={Login} />
        <ValidateRoute isPrivate component={Home} />
      </Switch>
    </Router>
  );
}

export default HOC(Layout);
