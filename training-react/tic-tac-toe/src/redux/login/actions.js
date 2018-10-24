import loginService from '@services/loginService';

export const actionsTypes = {
  AUTH_USER: 'AUTH_USER',
  HAS_ERROR_USER: 'HAS_ERROR_USER',
  SIGN_OUT_USER: 'SIGN_OUT_USER'
};

const actionCreators = {
  authUser: userData => async dispatch => {
    let token;
    const params = { username: userData.email, password: userData.password };
    const response = await loginService.authUser(params);
    if (response.ok) {
      token = response.data.id;
      localStorage.setItem('userToken', token);
      localStorage.setItem('userId', response.data.userId);
      loginService.setToken(token);
    }
    dispatch({
      type:
        response.status === 200 || response.status === 201
          ? actionsTypes.AUTH_USER
          : actionsTypes.HAS_ERROR_USER,
      payload: response.status === 200 || response.status === 201 ? token : 'LOGIN FAILED'
    });
  },
  signOutUser: () => dispatch => {
    localStorage.clear();
    dispatch({
      type: actionsTypes.SIGN_OUT_USER
    });
  }
};

export default actionCreators;
