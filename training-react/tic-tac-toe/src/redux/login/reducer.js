import { completeState, createReducer, completeReducer, onReadValue } from 'redux-recompose';

import { actionsTypes } from './actions';

const initialStateDescription = {
  loading: true
};

const initialState = completeState(initialStateDescription, ['loading']);

const reducerDescription = {
  primaryActions: [actionsTypes.AUTH_USER],
  override: {
    [actionsTypes.SET_AUTH_STATE]: onReadValue(),
    [actionsTypes.APP_IS_LOADING]: onReadValue(),
    [actionsTypes.SET_ID_USER]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
