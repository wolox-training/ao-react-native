import { completeState, createReducer, completeReducer, onReadValue } from 'redux-recompose';

import { actionsTypes } from './actions';

const initialStateDescription = {
  getUser: null,
  updateUser: null,
  isLoadedProfile: false,
  infoUser: {
    firstname: '',
    surname: '',
    username: '',
    address: ''
  }
};

const initialState = completeState(initialStateDescription, ['infoUser', 'isLoadedProfile']);

const reducerEffects = {
  clearState: state => ({
    ...state,
    ...initialState
  })
};

const reducerDescription = {
  primaryActions: [actionsTypes.UPDATE_USER, actionsTypes.GET_USER],
  override: {
    [actionsTypes.CLEAR_STATE]: reducerEffects.clearState,
    [actionsTypes.SET_INFO_USER]: onReadValue(),
    [actionsTypes.IS_LOADED_PROFILE]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
