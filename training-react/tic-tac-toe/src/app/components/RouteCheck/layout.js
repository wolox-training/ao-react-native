import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ROUTES from '@consts/route';
import Home from '@screens/Home';
import Login from '@screens/Login';
import Loader from '@components/Loader';

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

export default Loader(Layout);
