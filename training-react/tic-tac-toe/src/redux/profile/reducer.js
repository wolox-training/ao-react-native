import { actionsTypes } from './actions';

const initialState = {
  info: {
    firstname: '',
    surname: '',
    email: '',
    address: ''
  },
  loaded: false,
  msgUpdate: '',
  hasError: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        msgUpdate: action.payload
      };
    case actionsTypes.UPDATE_USER_ERROR:
      return {
        ...state,
        msgUpdate: action.payload,
        hasError: true
      };
    case actionsTypes.GET_USER:
      return {
        ...state,
        ...action.payload
      };

    case actionsTypes.LOADING:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
