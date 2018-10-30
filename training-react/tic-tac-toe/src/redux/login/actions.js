import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import loginService from '@services/loginService';

const target = {
  IS_AUTH: 'isAuth',
  APP_IS_LOADING: 'loading'
};

const completedTypes = completeTypes(['AUTH_USER'], ['APP_IS_LOADING', 'SET_AUTH_STATE']);

export const actionsTypes = createTypes(completedTypes, '@@LOGIN');

const actionCreators = {
  authUser: userData => ({
    type: actionsTypes.AUTH_USER,
    target: target.IS_AUTH,
    service: loginService.authUser,
    payload: { username: userData.email, password: userData.password },
    injections: [
      withPostSuccess((dispatch, response) => {
        const token = response.data.id;
        localStorage.setItem('userToken', token);
        localStorage.setItem('userId', response.data.userId);
        loginService.setToken(token);
        dispatch({
          type: actionsTypes.SET_AUTH_STATE,
          target: target.IS_AUTH,
          payload: !!token
        });
      })
    ]
  }),
  logout: () => ({
    type: actionsTypes.AUTH_USER,
    target: target.IS_AUTH,
    service: loginService.logout,
    injections: [
      withPostSuccess(dispatch => {
        localStorage.clear();
        dispatch({
          type: actionsTypes.SET_AUTH_STATE,
          target: target.IS_AUTH,
          payload: false
        });
      })
    ]
  }),
  loadApp: () => dispatch => {
    const token = localStorage.getItem('userToken');
    if (token) {
      loginService.setToken(token);
      dispatch({
        type: actionsTypes.SET_AUTH_STATE,
        target: target.IS_AUTH,
        payload: !!token
      });
    }
    dispatch({
      type: actionsTypes.APP_IS_LOADING,
      target: target.APP_IS_LOADING,
      payload: false
    });
  }
};

export default actionCreators;
