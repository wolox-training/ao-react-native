import { createReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import reducerEffects from './effects';
import { actionsTypes } from './actions';

const initialState = {
  items: []
};

const reducerDescription = {
  [actionsTypes.ADD_ITEM]: reducerEffects.addItem,
  [actionsTypes.REMOVE_ITEM]: reducerEffects.removeItem,
  [actionsTypes.TOGGLE_ITEM_COMPLETED]: reducerEffects.toggleItemCompleted,
  [actionsTypes.REMOVE_COMPLETED]: reducerEffects.removeCompleted
};

export default createReducer(Immutable(initialState), reducerDescription);
