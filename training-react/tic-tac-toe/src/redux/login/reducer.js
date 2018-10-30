import { completeState, createReducer, completeReducer, onReadValue } from 'redux-recompose';

import { actionsTypes } from './actions';

const initialStateDescription = {
  isAuth: null,
  appIsLoaded: false
};

const initialState = completeState(initialStateDescription, ['appIsLoaded']);

const reducerDescription = {
  primaryActions: [actionsTypes.AUTH_USER],
  override: {
    [actionsTypes.SET_AUTH_STATE]: onReadValue(),
    [actionsTypes.IS_LOADED_APP]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
