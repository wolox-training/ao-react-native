import { actionsTypes } from './actions';

const initialState = {
  hasErrorAuth: false,
  msgError: '',
  tokenAuth: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.AUTH_USER:
      return {
        ...state,
        hasErrorAuth: false,
        msgError: '',
        tokenAuth: action.payload
      };
    case actionsTypes.HAS_ERR_USER:
      return {
        ...state,
        hasErrorAuth: true,
        msgError: action.payload
      };
    default:
      return state;
  }
}
