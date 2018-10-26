import services from '@services/profileService';

export const actionsTypes = {
  UPDATE_USER_SUCCESS: 'UPDATE_USER',
  UPDATE_USER_ERROR: 'UPDATE_USER_ERROR',
  GET_USER: 'GET_USER',
  LOADING: 'LOADING',
  CLEAR_STATE: 'CLEAR_STATE'
};

const actionCreators = {
  updateUser: params => async dispatch => {
    const userId = localStorage.getItem('userId');
    const response = await services.updateUser(userId, params);
    if (response.ok) {
      dispatch({
        type: actionsTypes.UPDATE_USER_SUCCESS,
        payload: 'Success update user data'
      });
    } else {
      dispatch({
        type: actionsTypes.UPDATE_USER_ERROR,
        payload: 'Error in update user data'
      });
    }
  },
  getUser: () => async dispatch => {
    const idUser = localStorage.getItem('userId');
    dispatch({ type: actionsTypes.LOADING, payload: false });
    const response = await services.getUser(idUser);
    dispatch({
      type: actionsTypes.GET_USER,
      payload: {
        firstname: response.data.firstname,
        surname: response.data.surname,
        username: response.data.username,
        address: response.data.address
      }
    });
    dispatch({ type: actionsTypes.LOADING, payload: true });
  },
  clearState: () => ({
    type: actionsTypes.CLEAR_STATE
  })
};

export default actionCreators;
