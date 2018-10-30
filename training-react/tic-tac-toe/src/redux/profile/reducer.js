import { completeState, createReducer, completeReducer, onReadValue } from 'redux-recompose';

import { actionsTypes } from './actions';

const initialStateDescription = {
  getUser: null,
  updateUser: null,
  loading: true,
  isSuccessUpdate: false,
  infoUser: {
    firstname: '',
    surname: '',
    username: '',
    address: ''
  }
};

const initialState = completeState(initialStateDescription, ['infoUser', 'loading', 'isSuccessUpdate']);

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
    [actionsTypes.PROFILE_IS_LOADING]: onReadValue(),
    [actionsTypes.IS_SUCCESS_UPDATE]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
