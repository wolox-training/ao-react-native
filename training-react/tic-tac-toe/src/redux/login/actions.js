import loginService from '@services/loginService';

export const actionsTypes = {
  AUTH_USER: 'AUTH_USER',
  HAS_ERR_USER: 'HAS_ERR_USER'
};

const actionCreators = {
  authUser: userData => async dispatch => {
    const params = { username: userData.email, password: userData.password };
    const response = await loginService.authUser(params);
    const token = response.data.id;
    if (!response.data.error) {
      localStorage.setItem('userToken', token);
      localStorage.setItem('userId', response.data.userId);
      await loginService.setToken(token);
    }
    dispatch({
      type: response.data.error ? actionsTypes.HAS_ERR_USER : actionsTypes.AUTH_USER,
      payload: response.data.error ? response.data.error.message : token
    });
  }
};

export default actionCreators;
