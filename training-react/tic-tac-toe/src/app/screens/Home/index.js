import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@consts/route';

import Game from './screens/Game';
import Profile from './screens/Profile';
import Header from './components/Header';

function Home() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path={ROUTES.GAME} component={Game} />
        <Route path={ROUTES.PROFILE} component={Profile} />
      </Switch>
    </Fragment>
  );
}

export default Home;
