import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import { fetchMiddleware } from 'redux-recompose';

import { ROOT } from '../constants/platform';
import Navigator from '../app/screens';

import auth from './auth/reducer';
import todoList from './todoList/reducer';
import listBooks from './listBooks/reducer';

const nav = createNavigationReducer(Navigator);

const reducers = combineReducers({
  auth,
  todoList,
  listBooks,
  nav
});

const middlewares = [];
const enhancers = [];

/* ------------- React Navigation Middleware ------------- */
middlewares.push(createReactNavigationReduxMiddleware(ROOT, state => state.nav));

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// in dev mode, we'll create the store through Reactotron
const createAppropriateStore = __DEV__ ? Reactotron.createStore : createStore;
const store = createAppropriateStore(reducers, compose(...enhancers));

export default store;
