import { createReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actionsTypes } from './actions';

const initialState = {
  items: []
};

const reducerEffects = {
  addItem: (state, action) => ({
    ...state,
    [action.target]: [
      {
        label: action.payload,
        completed: false
      },
      ...state.items
    ]
  }),
  removeItem: (state, action) => ({
    ...state,
    [action.target]: state.items.filter((item, i) => i !== action.payload)
  }),
  toggleItemCompleted: (state, action) => ({
    ...state,
    [action.target]: state.items.map((item, i) => {
      if (i === action.payload) {
        return { label: item.label, completed: !item.completed };
      }
      return item;
    })
  }),
  removeCompleted: (state, action) => ({
    ...state,
    [action.target]: state.items.filter(item => !item.completed)
  })
};

const reducerDescription = {
  [actionsTypes.ADD_ITEM]: reducerEffects.addItem,
  [actionsTypes.REMOVE_ITEM]: reducerEffects.removeItem,
  [actionsTypes.TOGGLE_ITEM_COMPLETED]: reducerEffects.toggleItemCompleted,
  [actionsTypes.REMOVE_COMPLETED]: reducerEffects.removeCompleted
};

export default createReducer(Immutable(initialState), reducerDescription);
