import { createTypes } from 'redux-recompose';

export const actionsTypes = createTypes(
  ['ADD_ITEM', 'REMOVE_ITEM', 'TOGGLE_ITEM_COMPLETED', 'REMOVE_COMPLETED', 'SET_TEXT'],
  '@@TODO_LIST'
);

const target = {
  ITEMS: 'items',
  TEXT: 'text'
};

const actionCreators = {
  addItem: item => ({
    type: actionsTypes.ADD_ITEM,
    target: target.ITEMS,
    payload: item
  }),
  removeItem: index => ({
    type: actionsTypes.REMOVE_ITEM,
    target: target.ITEMS,
    payload: index
  }),
  toggleItemCompleted: index => ({
    type: actionsTypes.TOGGLE_ITEM_COMPLETED,
    target: target.ITEMS,
    payload: index
  }),
  removeCompleted: item => ({
    type: actionsTypes.REMOVE_COMPLETED,
    target: target.ITEMS,
    payload: item
  })
};

export default actionCreators;
