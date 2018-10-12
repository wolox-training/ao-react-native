import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import login from './login/reducer';

/* eslint-disable no-underscore-dangle */
export default createStore(
  combineReducers({ login }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
/* eslint-enable */
