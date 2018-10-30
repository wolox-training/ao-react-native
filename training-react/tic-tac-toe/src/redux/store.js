import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import game from './game/reducer';
import login from './login/reducer';
import profile from './profile/reducer';

const reducers = {
  form: formReducer,
  game,
  login,
  profile
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, fetchMiddleware)
);
/* eslint-enable */

export default store;
