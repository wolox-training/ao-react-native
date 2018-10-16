import loginService from '@services/loginService';

export const actionsTypes = {
  AUTH_USER: 'AUTH_USER'
};

const actionCreators = {
  authUser: userData => async dispatch => {
    const params = { username: userData.email, password: userData.password };
    const response = await loginService.authUser(params);
    dispatch({
      type: actionsTypes.AUTH_USER,
      payload: response.data.id
    });
  }
};

export default actionCreators;
