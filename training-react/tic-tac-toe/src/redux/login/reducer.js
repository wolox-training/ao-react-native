import { actionsTypes } from './actions';

const initialState = { tokenAuth: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.AUTH_USER:
      return {
        ...state,
        tokenAuth: action.payload
      };
    default:
      return state;
  }
}
