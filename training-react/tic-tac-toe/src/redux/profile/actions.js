import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import profileService from '@services/profileService';

const target = {
  UPDATE_USER: 'updateUser',
  GET_USER: 'getUser',
  INFO_USER: 'infoUser',
  IS_LOADED_PROFILE: 'isLoadedProfile',
  PROFILE: 'profile',
  IS_SUCCESS_UPDATE: 'isSuccessUpdate'
};

const completedTypes = completeTypes(
  ['UPDATE_USER', 'GET_USER'],
  ['CLEAR_STATE', 'SET_INFO_USER', 'IS_LOADED_PROFILE', 'IS_SUCCESS_UPDATE']
);

export const actionsTypes = createTypes(completedTypes, '@@PROFILE');

const actionCreators = {
  getUser: () => (dispatch, getState) => {
    const idUser = getState().login.idUser;
    dispatch({
      type: actionsTypes.GET_USER,
      target: target.GET_USER,
      service: profileService.getUser,
      payload: idUser,
      injections: [
        withPostSuccess((_, res) => {
          dispatch({
            type: actionsTypes.SET_INFO_USER,
            target: target.INFO_USER,
            payload: {
              firstname: res.data.firstname,
              surname: res.data.surname,
              username: res.data.username,
              address: res.data.address
            }
          });
          dispatch({
            type: actionsTypes.IS_LOADED_PROFILE,
            target: target.IS_LOADED_PROFILE,
            payload: true
          });
        })
      ]
    });
  },
  updateUser: userData => (dispatch, getState) => {
    const idUser = getState().login.idUser;
    dispatch({
      type: actionsTypes.UPDATE_USER,
      target: target.UPDATE_USER,
      service: profileService.updateUser,
      payload: { idUser, userData },
      injections: [
        withPostSuccess(() => {
          dispatch({
            type: actionsTypes.IS_SUCCESS_UPDATE,
            target: target.IS_SUCCESS_UPDATE,
            payload: true
          });
        })
      ]
    });
  },
  clearState: () => ({
    type: actionsTypes.CLEAR_STATE
  })
};

export default actionCreators;
