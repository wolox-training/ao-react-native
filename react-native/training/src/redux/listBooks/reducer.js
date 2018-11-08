import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialStateDescription = {
  itemsBooks: [],
  selectedBook: {}
};

const initialState = completeState(initialStateDescription, ['selectedBook']);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.SET_SELECTED_BOOK]: onReadValue()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
