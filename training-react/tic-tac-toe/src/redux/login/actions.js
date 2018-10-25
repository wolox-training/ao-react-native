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
      dispatch({
        type: actionsTypes.AUTH_USER,
        payload: token
      });
    } else {
      dispatch({
        type: actionsTypes.HAS_ERROR_USER,
        payload: 'LOGIN FAILED'
      });
    }
  },
  signOutUser: () => dispatch => {
    localStorage.clear();
    dispatch({
      type: actionsTypes.SIGN_OUT_USER
    });
  }
};

export default actionCreators;
