import { actionsTypes } from './actions';

const initialState = {
  hasErrorAuth: false,
  msgError: '',
  isLogedIn: !!localStorage.getItem('userToken'),
  tokenAuth: localStorage.getItem('userToken'),
  loading: true
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.AUTH_USER:
      return {
        ...state,
        hasErrorAuth: false,
        msgError: '',
        tokenAuth: action.payload,
        isLogedIn: true
      };
    case actionsTypes.HAS_ERROR_USER:
      return {
        ...state,
        hasErrorAuth: true,
        msgError: action.payload
      };
    case actionsTypes.SIGN_OUT_USER:
      return {
        ...state,
        isLogedIn: false,
        tokenAuth: null
      };
    case actionsTypes.VALIDATE_IS_LOGIN:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
