import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@consts/route';
import ErrorPage from '@screens/ErrorPage';

import Game from './screens/Game';
import Profile from './screens/Profile';
import HomePage from './screens/HomePage';
import NavBar from './components/NavBar';

function Home() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.GAME} component={Game} />
        <Route exact path={ROUTES.PROFILE} component={Profile} />
        <Route component={ErrorPage} />
      </Switch>
    </Fragment>
  );
}

export default Home;
