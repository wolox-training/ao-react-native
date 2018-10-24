import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@consts/route';

import Game from './screens/Game';
import Profile from './screens/Profile';
import NavBar from './components/NavBar';

function Home() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path={ROUTES.GAME} component={Game} />
        <Route path={ROUTES.PROFILE} component={Profile} />
      </Switch>
    </Fragment>
  );
}

export default Home;
