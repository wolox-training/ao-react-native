import { createTypes, completeTypes, withPostSuccess, withSuccess, withFailure } from 'redux-recompose';
import profileService from '@services/profileService';

const target = {
  UPDATE_USER: 'updateUser',
  GET_USER: 'getUser',
  INFO_USER: 'infoUser',
  IS_LOADED_PROFILE: 'isLoadedProfile',
  PROFILE: 'profile'
};

const completedTypes = completeTypes(
  ['UPDATE_USER', 'GET_USER'],
  ['CLEAR_STATE', 'SET_INFO_USER', 'IS_LOADED_PROFILE']
);

export const actionsTypes = createTypes(completedTypes, '@@PROFILE');

const actionCreators = {
  getUser: () => ({
    type: actionsTypes.GET_USER,
    target: target.GET_USER,
    service: profileService.getUser,
    injections: [
      withPostSuccess((dispatch, response) => {
        dispatch({
          type: actionsTypes.SET_INFO_USER,
          target: target.INFO_USER,
          payload: {
            firstname: response.data.firstname,
            surname: response.data.surname,
            username: response.data.username,
            address: response.data.address
          }
        });
        dispatch({
          type: actionsTypes.IS_LOADED_PROFILE,
          target: target.IS_LOADED_PROFILE,
          payload: true
        });
      })
    ]
  }),
  updateUser: userData => ({
    type: actionsTypes.UPDATE_USER,
    target: target.UPDATE_USER,
    service: profileService.updateUser,
    payload: userData,
    injections: [
      withSuccess(dispatch => {
        dispatch({
          type: actionsTypes.UPDATE_USER_SUCCESS,
          target: target.UPDATE_USER,
          payload: 'Succes update user data'
        });
        dispatch({
          type: actionsTypes.UPDATE_USER,
          target: target.UPDATE_USER,
          payload: false
        });
      }),
      withFailure(dispatch => {
        dispatch({
          type: actionsTypes.UPDATE_USER_FAILURE,
          target: target.UPDATE_USER,
          payload: true
        });
        dispatch({
          type: actionsTypes.UPDATE_USER,
          target: target.UPDATE_USER,
          payload: false
        });
      })
    ]
  }),
  clearState: () => ({
    type: actionsTypes.CLEAR_STATE
  })
};

export default actionCreators;
