import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ROUTES from '@consts/route';
import Game from '@screens/Game';
import Login from '@screens/Login';

import ValidateRoute from './components/ValidateRoute';

function RouteCheck() {
  return (
    <Router>
      <Switch>
        <ValidateRoute isPrivate={false} exact path={ROUTES.LOGIN} component={Login} />
        <ValidateRoute isPrivate path={ROUTES.GAME} component={Game} />
      </Switch>
    </Router>
  );
}

export default RouteCheck;
